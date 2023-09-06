import React, { useState, useEffect } from 'react';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import { listGraphResources } from './graphql/queries';
import { Link } from 'react-router-dom';
import "./QuickSight.css"

function QuickSight() {
  const [graphResources, setGraphResources] = useState([]);

  useEffect(() => {
    async function fetchGraphResources() {
      try {
        const user = await Auth.currentAuthenticatedUser();

        const response = await API.graphql(
          graphqlOperation(listGraphResources, {
            filter: {
              UserID: { eq: user.attributes.sub }
            }
          })
        );

        console.log('API Response:', response);
        const graphResourceData = response.data.listGraphResources.items;
        setGraphResources(graphResourceData);
      } catch (error) {
        console.error('Error fetching GraphResources:', error);
      }
    }

    fetchGraphResources();
  }, []);

  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      window.location.reload();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="quick-sight-container">
      <h2>QuickSight</h2>
      <div className="graph-list">
        {graphResources.map(graph => (
          <div key={graph.resource_id} className="graph-item">
            <img src={graph.objectURL} alt="Graph" />
            <div className="graph-event-time">{graph.EventTime}</div>
          </div>
        ))}
      </div>
      <div className="bottom-bar">
        <button onClick={handleSignOut}>Sign Out</button>
        <Link to="/">Back to Video Display</Link>
        <p>&copy; Smart Baby Cot</p>
      </div>
    </div>
  );
}

export default QuickSight;
