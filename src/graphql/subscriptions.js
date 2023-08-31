/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateVideoResource = /* GraphQL */ `
  subscription OnCreateVideoResource(
    $resource_id: String
    $Bucket: String
    $EventTime: String
    $Object: String
    $objectURL: String
  ) {
    onCreateVideoResource(
      resource_id: $resource_id
      Bucket: $Bucket
      EventTime: $EventTime
      Object: $Object
      objectURL: $objectURL
    ) {
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
export const onUpdateVideoResource = /* GraphQL */ `
  subscription OnUpdateVideoResource(
    $resource_id: String
    $Bucket: String
    $EventTime: String
    $Object: String
    $objectURL: String
  ) {
    onUpdateVideoResource(
      resource_id: $resource_id
      Bucket: $Bucket
      EventTime: $EventTime
      Object: $Object
      objectURL: $objectURL
    ) {
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
export const onDeleteVideoResource = /* GraphQL */ `
  subscription OnDeleteVideoResource(
    $resource_id: String
    $Bucket: String
    $EventTime: String
    $Object: String
    $objectURL: String
  ) {
    onDeleteVideoResource(
      resource_id: $resource_id
      Bucket: $Bucket
      EventTime: $EventTime
      Object: $Object
      objectURL: $objectURL
    ) {
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
