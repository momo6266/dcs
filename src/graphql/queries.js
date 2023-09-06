/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVideoResource = /* GraphQL */ `
  query GetVideoResource($resource_id: String!) {
    getVideoResource(resource_id: $resource_id) {
      resource_id
      Bucket
      EventTime
      Object
      objectURL
      s3URL
      UserID
      __typename
    }
  }
`;
export const listVideoResources = /* GraphQL */ `
  query ListVideoResources(
    $filter: TableVideoResourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        resource_id
        Bucket
        EventTime
        Object
        objectURL
        s3URL
        UserID
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGraphResource = /* GraphQL */ `
  query GetGraphResource($resource_id: String!) {
    getGraphResource(resource_id: $resource_id) {
      resource_id
      Bucket
      EventTime
      Object
      objectURL
      UserID
      __typename
    }
  }
`;
export const listGraphResources = /* GraphQL */ `
query ListGraphResources($filter: TableGraphResourceFilterInput, $limit: Int, $nextToken: String) {
  listGraphResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      resource_id
      Bucket
      EventTime
      Object
      objectURL
      UserID
    }
    nextToken
  }
}

`;
