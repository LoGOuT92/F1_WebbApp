import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Driver = {
  __typename?: 'Driver';
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  name: Scalars['String'];
  surName: Scalars['String'];
  team: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type DriverNameInput = {
  color: Scalars['String'];
  name: Scalars['String'];
  surName: Scalars['String'];
  team: Scalars['String'];
};

export type DriverResponse = {
  __typename?: 'DriverResponse';
  driver?: Maybe<Driver>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDriver: DriverResponse;
  createPost: Post;
  createTeam: TeamResponse;
  createTour: TourResponse;
  deleteDriver: Scalars['Boolean'];
  login: UserResponse;
  register: UserResponse;
  updateUser: UserResponse;
};


export type MutationCreateDriverArgs = {
  driverInput: DriverNameInput;
};


export type MutationCreatePostArgs = {
  postInput: PostInput;
};


export type MutationCreateTeamArgs = {
  TeamInput: TeamNameInput;
};


export type MutationCreateTourArgs = {
  tourInput: TourNameInput;
};


export type MutationDeleteDriverArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UserNameInput;
};


export type MutationUpdateUserArgs = {
  email: Scalars['String'];
  id: Scalars['Float'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type PaginatedPosts = {
  __typename?: 'PaginatedPosts';
  hasMore: Scalars['Boolean'];
  posts: Array<Post>;
};

export type Post = {
  __typename?: 'Post';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  imgURL: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PostInput = {
  content: Scalars['String'];
  imgURL: Scalars['String'];
  title: Scalars['String'];
  type: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  drivers: Array<Driver>;
  paginatedPosts?: Maybe<PaginatedPosts>;
  posts?: Maybe<PaginatedPosts>;
  team: Array<Team>;
  tours: Array<Tour>;
  users: Array<User>;
};


export type QueryPaginatedPostsArgs = {
  type: Scalars['String'];
};


export type QueryPostsArgs = {
  type: Scalars['String'];
};

export type Team = {
  __typename?: 'Team';
  color: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Float'];
  imgURL: Scalars['String'];
  team: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TeamNameInput = {
  color: Scalars['String'];
  imgURL: Scalars['String'];
  team: Scalars['String'];
};

export type TeamResponse = {
  __typename?: 'TeamResponse';
  team?: Maybe<Team>;
};

export type Tour = {
  __typename?: 'Tour';
  content: Scalars['String'];
  createdAt: Scalars['DateTime'];
  date: Scalars['String'];
  id: Scalars['Float'];
  imgURL: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TourNameInput = {
  content: Scalars['String'];
  date: Scalars['String'];
  imgURL: Scalars['String'];
  title: Scalars['String'];
};

export type TourResponse = {
  __typename?: 'TourResponse';
  tour?: Maybe<Tour>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Float'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserNameInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type CreatePostMutationVariables = Exact<{
  postInput: PostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', content: string, id: number, imgURL: string, title: string, type: string } };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, email: string, username: string } | null } };

export type RegisterMutationVariables = Exact<{
  options: UserNameInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', email: string, id: number, username: string } | null } };

export type UpdateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
  updateUserId: Scalars['Float'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, email: string, username: string } | null } };

export type DriversQueryVariables = Exact<{ [key: string]: never; }>;


export type DriversQuery = { __typename?: 'Query', drivers: Array<{ __typename?: 'Driver', id: number, color: string, name: string, surName: string, team: string }> };

export type PaginatedPostsQueryVariables = Exact<{
  type: Scalars['String'];
}>;


export type PaginatedPostsQuery = { __typename?: 'Query', paginatedPosts?: { __typename?: 'PaginatedPosts', posts: Array<{ __typename?: 'Post', id: number, content: string, createdAt: any, imgURL: string, title: string, type: string, updatedAt: any }> } | null };

export type PostsQueryVariables = Exact<{
  type: Scalars['String'];
}>;


export type PostsQuery = { __typename?: 'Query', posts?: { __typename?: 'PaginatedPosts', hasMore: boolean, posts: Array<{ __typename: 'Post', content: string, createdAt: any, id: number, imgURL: string, title: string, type: string, updatedAt: any }> } | null };

export type TeamsQueryVariables = Exact<{ [key: string]: never; }>;


export type TeamsQuery = { __typename?: 'Query', team: Array<{ __typename?: 'Team', id: number, color: string, imgURL: string, team: string }> };

export type TourQueryVariables = Exact<{ [key: string]: never; }>;


export type TourQuery = { __typename?: 'Query', tours: Array<{ __typename?: 'Tour', id: number, content: string, date: string, imgURL: string, title: string }> };


export const CreatePostDocument = gql`
    mutation CreatePost($postInput: PostInput!) {
  createPost(postInput: $postInput) {
    content
    id
    imgURL
    title
    type
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      postInput: // value for 'postInput'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const LoginDocument = gql`
    mutation Login($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    errors {
      field
      message
    }
    user {
      id
      email
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: UserNameInput!) {
  register(options: $options) {
    errors {
      field
      message
    }
    user {
      email
      id
      username
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($email: String!, $password: String!, $username: String!, $updateUserId: Float!) {
  updateUser(
    email: $email
    password: $password
    username: $username
    id: $updateUserId
  ) {
    errors {
      field
      message
    }
    user {
      id
      email
      username
    }
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      username: // value for 'username'
 *      updateUserId: // value for 'updateUserId'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DriversDocument = gql`
    query Drivers {
  drivers {
    id
    color
    name
    surName
    team
  }
}
    `;

/**
 * __useDriversQuery__
 *
 * To run a query within a React component, call `useDriversQuery` and pass it any options that fit your needs.
 * When your component renders, `useDriversQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDriversQuery({
 *   variables: {
 *   },
 * });
 */
export function useDriversQuery(baseOptions?: Apollo.QueryHookOptions<DriversQuery, DriversQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DriversQuery, DriversQueryVariables>(DriversDocument, options);
      }
export function useDriversLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DriversQuery, DriversQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DriversQuery, DriversQueryVariables>(DriversDocument, options);
        }
export type DriversQueryHookResult = ReturnType<typeof useDriversQuery>;
export type DriversLazyQueryHookResult = ReturnType<typeof useDriversLazyQuery>;
export type DriversQueryResult = Apollo.QueryResult<DriversQuery, DriversQueryVariables>;
export const PaginatedPostsDocument = gql`
    query paginatedPosts($type: String!) {
  paginatedPosts(type: $type) {
    posts {
      id
      content
      createdAt
      imgURL
      title
      type
      updatedAt
    }
  }
}
    `;

/**
 * __usePaginatedPostsQuery__
 *
 * To run a query within a React component, call `usePaginatedPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaginatedPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaginatedPostsQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function usePaginatedPostsQuery(baseOptions: Apollo.QueryHookOptions<PaginatedPostsQuery, PaginatedPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaginatedPostsQuery, PaginatedPostsQueryVariables>(PaginatedPostsDocument, options);
      }
export function usePaginatedPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaginatedPostsQuery, PaginatedPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaginatedPostsQuery, PaginatedPostsQueryVariables>(PaginatedPostsDocument, options);
        }
export type PaginatedPostsQueryHookResult = ReturnType<typeof usePaginatedPostsQuery>;
export type PaginatedPostsLazyQueryHookResult = ReturnType<typeof usePaginatedPostsLazyQuery>;
export type PaginatedPostsQueryResult = Apollo.QueryResult<PaginatedPostsQuery, PaginatedPostsQueryVariables>;
export const PostsDocument = gql`
    query Posts($type: String!) {
  posts(type: $type) {
    hasMore
    posts {
      content
      createdAt
      id
      imgURL
      title
      type
      updatedAt
      __typename
    }
  }
}
    `;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function usePostsQuery(baseOptions: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export const TeamsDocument = gql`
    query Teams {
  team {
    id
    color
    imgURL
    team
  }
}
    `;

/**
 * __useTeamsQuery__
 *
 * To run a query within a React component, call `useTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeamsQuery(baseOptions?: Apollo.QueryHookOptions<TeamsQuery, TeamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TeamsQuery, TeamsQueryVariables>(TeamsDocument, options);
      }
export function useTeamsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TeamsQuery, TeamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TeamsQuery, TeamsQueryVariables>(TeamsDocument, options);
        }
export type TeamsQueryHookResult = ReturnType<typeof useTeamsQuery>;
export type TeamsLazyQueryHookResult = ReturnType<typeof useTeamsLazyQuery>;
export type TeamsQueryResult = Apollo.QueryResult<TeamsQuery, TeamsQueryVariables>;
export const TourDocument = gql`
    query Tour {
  tours {
    id
    content
    date
    imgURL
    title
  }
}
    `;

/**
 * __useTourQuery__
 *
 * To run a query within a React component, call `useTourQuery` and pass it any options that fit your needs.
 * When your component renders, `useTourQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTourQuery({
 *   variables: {
 *   },
 * });
 */
export function useTourQuery(baseOptions?: Apollo.QueryHookOptions<TourQuery, TourQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TourQuery, TourQueryVariables>(TourDocument, options);
      }
export function useTourLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TourQuery, TourQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TourQuery, TourQueryVariables>(TourDocument, options);
        }
export type TourQueryHookResult = ReturnType<typeof useTourQuery>;
export type TourLazyQueryHookResult = ReturnType<typeof useTourLazyQuery>;
export type TourQueryResult = Apollo.QueryResult<TourQuery, TourQueryVariables>;