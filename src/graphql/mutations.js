/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVideoResource = /* GraphQL */ `
  mutation CreateVideoResource($input: CreateVideoResourceInput!) {
    createVideoResource(input: $input) {
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
export const updateVideoResource = /* GraphQL */ `
  mutation UpdateVideoResource($input: UpdateVideoResourceInput!) {
    updateVideoResource(input: $input) {
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
export const deleteVideoResource = /* GraphQL */ `
  mutation DeleteVideoResource($input: DeleteVideoResourceInput!) {
    deleteVideoResource(input: $input) {
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
export const createGraphResource = /* GraphQL */ `
  mutation CreateGraphResource($input: CreateGraphResourceInput!) {
    createGraphResource(input: $input) {
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
export const updateGraphResource = /* GraphQL */ `
  mutation UpdateGraphResource($input: UpdateGraphResourceInput!) {
    updateGraphResource(input: $input) {
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
export const deleteGraphResource = /* GraphQL */ `
  mutation DeleteGraphResource($input: DeleteGraphResourceInput!) {
    deleteGraphResource(input: $input) {
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
