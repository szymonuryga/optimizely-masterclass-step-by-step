import { DocumentNode, ExecutionResult } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
};

export type AvailabilityBlock = IData & _IComponent & _IContent & {
  __typename?: 'AvailabilityBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  availability: Maybe<Scalars['String']['output']>;
  projectTypes: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type AvailabilityBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type AvailabilityBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type AvailabilityBlockAutocomplete = {
  __typename?: 'AvailabilityBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type AvailabilityBlockFacet = {
  __typename?: 'AvailabilityBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type AvailabilityBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type AvailabilityBlockOutput = {
  __typename?: 'AvailabilityBlockOutput';
  autocomplete: Maybe<AvailabilityBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<AvailabilityBlockFacet>;
  item: Maybe<AvailabilityBlock>;
  items: Maybe<Array<Maybe<AvailabilityBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type AvailabilityBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type AvailabilityBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlankExperience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlankExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete: Maybe<BlankExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankExperienceFacet>;
  item: Maybe<BlankExperience>;
  items: Maybe<Array<Maybe<BlankExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlankSection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankSection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete: Maybe<BlankSectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankSectionFacet>;
  item: Maybe<BlankSection>;
  items: Maybe<Array<Maybe<BlankSection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type CmsPage = IData & _IContent & _IPage & {
  __typename?: 'CMSPage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type CmsPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CmsPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CmsPageAutocomplete = {
  __typename?: 'CMSPageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
};

export type CmsPageFacet = {
  __typename?: 'CMSPageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
};

export type CmsPageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
};

export type CmsPageOutput = {
  __typename?: 'CMSPageOutput';
  autocomplete: Maybe<CmsPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CmsPageFacet>;
  item: Maybe<CmsPage>;
  items: Maybe<Array<Maybe<CmsPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CmsPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CmsPageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  blocks: InputMaybe<_IContentWhereInput>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key: Maybe<Scalars['String']['output']>;
  value: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompleteValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key: Maybe<Array<Maybe<StringFacet>>>;
  value: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetValueArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key: InputMaybe<OrderBy>;
  value: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key: InputMaybe<StringFilterInput>;
  value: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes: Maybe<ICompositionNodeAutocomplete>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  nodes: Maybe<ICompositionNodeFacet>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  nodes: InputMaybe<ICompositionNodeOrderByInput>;
  type: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  nodes: InputMaybe<ICompositionNodeWhereInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ContactBlock = IData & _IComponent & _IContent & {
  __typename?: 'ContactBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  description: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ContactBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContactBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContactBlockAutocomplete = {
  __typename?: 'ContactBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContactBlockFacet = {
  __typename?: 'ContactBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContactBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContactBlockOutput = {
  __typename?: 'ContactBlockOutput';
  autocomplete: Maybe<ContactBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContactBlockFacet>;
  item: Maybe<ContactBlock>;
  items: Maybe<Array<Maybe<ContactBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContactBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type ContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['String']['output']>;
  graph: Maybe<Scalars['String']['output']>;
  hierarchical: Maybe<Scalars['String']['output']>;
  internal: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompleteBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteDefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteGraphArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteHierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteInternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base: Maybe<Array<Maybe<StringFacet>>>;
  default: Maybe<Array<Maybe<StringFacet>>>;
  graph: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical: Maybe<Array<Maybe<StringFacet>>>;
  internal: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetBaseArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetDefaultArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetGraphArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetHierarchicalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetInternalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base: InputMaybe<OrderBy>;
  default: InputMaybe<OrderBy>;
  graph: InputMaybe<OrderBy>;
  hierarchical: InputMaybe<OrderBy>;
  internal: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base: InputMaybe<StringFilterInput>;
  default: InputMaybe<StringFilterInput>;
  graph: InputMaybe<StringFilterInput>;
  hierarchical: InputMaybe<StringFilterInput>;
  internal: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type Data_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Data_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor: Maybe<Scalars['String']['output']>;
  item: Maybe<IData>;
  items: Maybe<Array<Maybe<IData>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin: InputMaybe<Scalars['Date']['input']>;
  rate: InputMaybe<Scalars['Float']['input']>;
  scale: InputMaybe<Scalars['Int']['input']>;
};

export type DemoTest = IData & _IComponent & _IContent & {
  __typename?: 'DemoTest';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  checkbox: Maybe<Scalars['Boolean']['output']>;
};


export type DemoTest_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type DemoTest_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type DemoTestAutocomplete = {
  __typename?: 'DemoTestAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type DemoTestFacet = {
  __typename?: 'DemoTestFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type DemoTestOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type DemoTestOutput = {
  __typename?: 'DemoTestOutput';
  autocomplete: Maybe<DemoTestAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<DemoTestFacet>;
  item: Maybe<DemoTest>;
  items: Maybe<Array<Maybe<DemoTest>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type DemoTestOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type DemoTestWhereInput = {
  _and: InputMaybe<Array<InputMaybe<DemoTestWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<DemoTestWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<DemoTestWhereInput>>>;
};

export type Footer = IData & _IContent & _IPage & {
  __typename?: 'Footer';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  columns: Maybe<Array<Maybe<_IContent>>>;
  copyrightText: Maybe<Scalars['String']['output']>;
  socialLinks: Maybe<Array<Maybe<_IContent>>>;
};


export type Footer_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Footer_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FooterAutocomplete = {
  __typename?: 'FooterAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  columns: Maybe<_IContentAutocomplete>;
  socialLinks: Maybe<_IContentAutocomplete>;
};

export type FooterColumn = IData & _IComponent & _IContent & {
  __typename?: 'FooterColumn';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  links: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type FooterColumn_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterColumn_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FooterColumnAutocomplete = {
  __typename?: 'FooterColumnAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  links: Maybe<_IContentAutocomplete>;
};

export type FooterColumnFacet = {
  __typename?: 'FooterColumnFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  links: Maybe<_IContentFacet>;
};

export type FooterColumnOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  links: InputMaybe<_IContentOrderByInput>;
};

export type FooterColumnOutput = {
  __typename?: 'FooterColumnOutput';
  autocomplete: Maybe<FooterColumnAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FooterColumnFacet>;
  item: Maybe<FooterColumn>;
  items: Maybe<Array<Maybe<FooterColumn>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FooterColumnOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterColumnWhereInput = {
  _and: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  links: InputMaybe<_IContentWhereInput>;
};

export type FooterFacet = {
  __typename?: 'FooterFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  columns: Maybe<_IContentFacet>;
  socialLinks: Maybe<_IContentFacet>;
};

export type FooterOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  columns: InputMaybe<_IContentOrderByInput>;
  socialLinks: InputMaybe<_IContentOrderByInput>;
};

export type FooterOutput = {
  __typename?: 'FooterOutput';
  autocomplete: Maybe<FooterAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FooterFacet>;
  item: Maybe<Footer>;
  items: Maybe<Array<Maybe<Footer>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FooterOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterWhereInput = {
  _and: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  columns: InputMaybe<_IContentWhereInput>;
  socialLinks: InputMaybe<_IContentWhereInput>;
};

export type GenericMedia123 = IData & _IContent & _IMedia & {
  __typename?: 'GenericMedia123';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type GenericMedia123_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMedia123_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type GenericMedia123Autocomplete = {
  __typename?: 'GenericMedia123Autocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMedia123Facet = {
  __typename?: 'GenericMedia123Facet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type GenericMedia123OrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMedia123Output = {
  __typename?: 'GenericMedia123Output';
  autocomplete: Maybe<GenericMedia123Autocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<GenericMedia123Facet>;
  item: Maybe<GenericMedia123>;
  items: Maybe<Array<Maybe<GenericMedia123>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type GenericMedia123OutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMedia123WhereInput = {
  _and: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
};

export type Header = IData & _IContent & _IPage & {
  __typename?: 'Header';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  ctaHref: Maybe<Scalars['String']['output']>;
  ctaText: Maybe<Scalars['String']['output']>;
  logo: Maybe<Scalars['String']['output']>;
  navItems: Maybe<Array<Maybe<_IContent>>>;
};


export type Header_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Header_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeaderAutocomplete = {
  __typename?: 'HeaderAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  navItems: Maybe<_IContentAutocomplete>;
};

export type HeaderFacet = {
  __typename?: 'HeaderFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  navItems: Maybe<_IContentFacet>;
};

export type HeaderOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  navItems: InputMaybe<_IContentOrderByInput>;
};

export type HeaderOutput = {
  __typename?: 'HeaderOutput';
  autocomplete: Maybe<HeaderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeaderFacet>;
  item: Maybe<Header>;
  items: Maybe<Array<Maybe<Header>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeaderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  navItems: InputMaybe<_IContentWhereInput>;
};

export type HeroBlock = IData & _IComponent & _IContent & {
  __typename?: 'HeroBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  decorationColorsPrimary: Maybe<Scalars['String']['output']>;
  decorationColorsSecondary: Maybe<Scalars['String']['output']>;
  showDecoration: Maybe<Scalars['Boolean']['output']>;
  subtitle: Maybe<Scalars['String']['output']>;
  tesr12: Maybe<Scalars['DateTime']['output']>;
  test: Maybe<Link>;
  test2: Maybe<ContentUrl>;
  title: Maybe<Scalars['String']['output']>;
};


export type HeroBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  test: Maybe<LinkAutocomplete>;
  test2: Maybe<ContentUrlAutocomplete>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  test: Maybe<LinkFacet>;
  test2: Maybe<ContentUrlFacet>;
};

export type HeroBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  test: InputMaybe<LinkOrderByInput>;
  test2: InputMaybe<ContentUrlOrderByInput>;
};

export type HeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  autocomplete: Maybe<HeroBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeroBlockFacet>;
  item: Maybe<HeroBlock>;
  items: Maybe<Array<Maybe<HeroBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  test: InputMaybe<LinkWhereInput>;
  test2: InputMaybe<ContentUrlWhereInput>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled: InputMaybe<Scalars['Boolean']['input']>;
  endToken: InputMaybe<Scalars['String']['input']>;
  startToken: InputMaybe<Scalars['String']['input']>;
};

export type ICompositionComponentNode = {
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  changeset: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
  version: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompleteChangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteFallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVersionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  changeset: Maybe<Array<Maybe<StringFacet>>>;
  created: Maybe<Array<Maybe<DateFacet>>>;
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  fallbackForLocale: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  lastModified: Maybe<Array<Maybe<DateFacet>>>;
  locale: Maybe<Array<Maybe<StringFacet>>>;
  published: Maybe<Array<Maybe<DateFacet>>>;
  status: Maybe<Array<Maybe<StringFacet>>>;
  types: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
  version: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetChangesetArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetFallbackForLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetPublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetTypesArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVersionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset: InputMaybe<OrderBy>;
  created: InputMaybe<OrderBy>;
  displayName: InputMaybe<OrderBy>;
  fallbackForLocale: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  lastModified: InputMaybe<OrderBy>;
  locale: InputMaybe<OrderBy>;
  published: InputMaybe<OrderBy>;
  status: InputMaybe<OrderBy>;
  types: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
  version: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset: InputMaybe<StringFilterInput>;
  created: InputMaybe<DateFilterInput>;
  displayName: InputMaybe<SearchableStringFilterInput>;
  fallbackForLocale: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  lastModified: InputMaybe<DateFilterInput>;
  locale: InputMaybe<StringFilterInput>;
  published: InputMaybe<DateFilterInput>;
  status: InputMaybe<StringFilterInput>;
  types: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
  version: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type IData_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IData_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IMediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ImageMedia = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'ImageMedia';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type ImageMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete: Maybe<ImageMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageMediaFacet>;
  item: Maybe<ImageMedia>;
  items: Maybe<Array<Maybe<ImageMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type ItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type Link = {
  __typename?: 'Link';
  target: Maybe<Scalars['String']['output']>;
  text: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<ContentUrl>;
};


export type LinkTextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type LinkAutocomplete = {
  __typename?: 'LinkAutocomplete';
  target: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
};


export type LinkAutocompleteTargetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LinkConfig = {
  from: InputMaybe<Scalars['String']['input']>;
  to: InputMaybe<Scalars['String']['input']>;
};

export type LinkFacet = {
  __typename?: 'LinkFacet';
  target: Maybe<Array<Maybe<StringFacet>>>;
  text: Maybe<Array<Maybe<StringFacet>>>;
  title: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
};


export type LinkFacetTargetArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacetTextArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkOrderByInput = {
  target: InputMaybe<OrderBy>;
  text: InputMaybe<OrderBy>;
  title: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  Assets = 'ASSETS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Default = 'DEFAULT',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Items = 'ITEMS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  Path = 'PATH'
}

export type LinkWhereInput = {
  target: InputMaybe<StringFilterInput>;
  text: InputMaybe<SearchableStringFilterInput>;
  title: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
};

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en',
  Pl = 'pl',
  Sv = 'sv'
}

export type LogoItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'LogoItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  alt: Maybe<Scalars['String']['output']>;
  src: Maybe<Scalars['String']['output']>;
};


export type LogoItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogoItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LogoItemBlockAutocomplete = {
  __typename?: 'LogoItemBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type LogoItemBlockFacet = {
  __typename?: 'LogoItemBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type LogoItemBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type LogoItemBlockOutput = {
  __typename?: 'LogoItemBlockOutput';
  autocomplete: Maybe<LogoItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LogoItemBlockFacet>;
  item: Maybe<LogoItemBlock>;
  items: Maybe<Array<Maybe<LogoItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LogoItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogoItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
};

export type LogosBlock = IData & _IComponent & _IContent & {
  __typename?: 'LogosBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  logos: Maybe<Array<Maybe<_IContent>>>;
};


export type LogosBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogosBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LogosBlockAutocomplete = {
  __typename?: 'LogosBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  logos: Maybe<_IContentAutocomplete>;
};

export type LogosBlockFacet = {
  __typename?: 'LogosBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  logos: Maybe<_IContentFacet>;
};

export type LogosBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  logos: InputMaybe<_IContentOrderByInput>;
};

export type LogosBlockOutput = {
  __typename?: 'LogosBlockOutput';
  autocomplete: Maybe<LogosBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LogosBlockFacet>;
  item: Maybe<LogosBlock>;
  items: Maybe<Array<Maybe<LogosBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LogosBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogosBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  logos: InputMaybe<_IContentWhereInput>;
};

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type MediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type NavItem = IData & _IComponent & _IContent & {
  __typename?: 'NavItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  href: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
};


export type NavItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type NavItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type NavItemAutocomplete = {
  __typename?: 'NavItemAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type NavItemFacet = {
  __typename?: 'NavItemFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type NavItemOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type NavItemOutput = {
  __typename?: 'NavItemOutput';
  autocomplete: Maybe<NavItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<NavItemFacet>;
  item: Maybe<NavItem>;
  items: Maybe<Array<Maybe<NavItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type NavItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type PortfolioGridBlock = IData & _IComponent & _IContent & {
  __typename?: 'PortfolioGridBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  items: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type PortfolioGridBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioGridBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PortfolioGridBlockAutocomplete = {
  __typename?: 'PortfolioGridBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  items: Maybe<_IContentAutocomplete>;
};

export type PortfolioGridBlockFacet = {
  __typename?: 'PortfolioGridBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  items: Maybe<_IContentFacet>;
};

export type PortfolioGridBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  items: InputMaybe<_IContentOrderByInput>;
};

export type PortfolioGridBlockOutput = {
  __typename?: 'PortfolioGridBlockOutput';
  autocomplete: Maybe<PortfolioGridBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PortfolioGridBlockFacet>;
  item: Maybe<PortfolioGridBlock>;
  items: Maybe<Array<Maybe<PortfolioGridBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PortfolioGridBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioGridBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  items: InputMaybe<_IContentWhereInput>;
};

export type PortfolioItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'PortfolioItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  description: Maybe<Scalars['String']['output']>;
  imageUrl: Maybe<Scalars['String']['output']>;
  link: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type PortfolioItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PortfolioItemBlockAutocomplete = {
  __typename?: 'PortfolioItemBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type PortfolioItemBlockFacet = {
  __typename?: 'PortfolioItemBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type PortfolioItemBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type PortfolioItemBlockOutput = {
  __typename?: 'PortfolioItemBlockOutput';
  autocomplete: Maybe<PortfolioItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PortfolioItemBlockFacet>;
  item: Maybe<PortfolioItemBlock>;
  items: Maybe<Array<Maybe<PortfolioItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PortfolioItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
};

export type ProfileBlock = IData & _IComponent & _IContent & {
  __typename?: 'ProfileBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  bio: Maybe<Scalars['String']['output']>;
  imageSrc: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ProfileBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ProfileBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ProfileBlockAutocomplete = {
  __typename?: 'ProfileBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ProfileBlockFacet = {
  __typename?: 'ProfileBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ProfileBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ProfileBlockOutput = {
  __typename?: 'ProfileBlockOutput';
  autocomplete: Maybe<ProfileBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ProfileBlockFacet>;
  item: Maybe<ProfileBlock>;
  items: Maybe<Array<Maybe<ProfileBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ProfileBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProfileBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
};

export type Query = {
  __typename?: 'Query';
  AvailabilityBlock: Maybe<AvailabilityBlockOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  Data: Maybe<DataOutput>;
  DemoTest: Maybe<DemoTestOutput>;
  Footer: Maybe<FooterOutput>;
  FooterColumn: Maybe<FooterColumnOutput>;
  GenericMedia123: Maybe<GenericMedia123Output>;
  Header: Maybe<HeaderOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LogoItemBlock: Maybe<LogoItemBlockOutput>;
  LogosBlock: Maybe<LogosBlockOutput>;
  NavItem: Maybe<NavItemOutput>;
  PortfolioGridBlock: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock: Maybe<ProfileBlockOutput>;
  SEOExperience: Maybe<SeoExperienceOutput>;
  ServiceItem: Maybe<ServiceItemOutput>;
  ServicesBlock: Maybe<ServicesBlockOutput>;
  SocialLink: Maybe<SocialLinkOutput>;
  StartPage: Maybe<StartPageOutput>;
  StoryBlock: Maybe<StoryBlockOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TestimonialItem: Maybe<TestimonialItemOutput>;
  TestimonialItemBlock: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock: Maybe<TestimonialsBlockOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryAvailabilityBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AvailabilityBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<AvailabilityBlockWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryCmsPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CmsPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CmsPageWhereInput>;
};


export type QueryContactBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContactBlockWhereInput>;
};


export type QueryDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<DataWhereInput>;
};


export type QueryDemoTestArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<DemoTestOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<DemoTestWhereInput>;
};


export type QueryFooterArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FooterWhereInput>;
};


export type QueryFooterColumnArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterColumnOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FooterColumnWhereInput>;
};


export type QueryGenericMedia123Args = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMedia123OrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<GenericMedia123WhereInput>;
};


export type QueryHeaderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeaderWhereInput>;
};


export type QueryHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryLogoItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogoItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LogoItemBlockWhereInput>;
};


export type QueryLogosBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogosBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LogosBlockWhereInput>;
};


export type QueryNavItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<NavItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<NavItemWhereInput>;
};


export type QueryPortfolioGridBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioGridBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<PortfolioGridBlockWhereInput>;
};


export type QueryPortfolioItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<PortfolioItemBlockWhereInput>;
};


export type QueryProfileBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProfileBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ProfileBlockWhereInput>;
};


export type QuerySeoExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SeoExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SeoExperienceWhereInput>;
};


export type QueryServiceItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServiceItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ServiceItemWhereInput>;
};


export type QueryServicesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServicesBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ServicesBlockWhereInput>;
};


export type QuerySocialLinkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SocialLinkWhereInput>;
};


export type QueryStartPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StartPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<StartPageWhereInput>;
};


export type QueryStoryBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StoryBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<StoryBlockWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTestimonialItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialItemWhereInput>;
};


export type QueryTestimonialItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialItemBlockWhereInput>;
};


export type QueryTestimonialsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialsBlockWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<VideoMediaWhereInput>;
};


export type Query_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ContentWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ImageWhereInput>;
};


export type Query_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_VideoWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  AvailabilityBlock: Maybe<AvailabilityBlockOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  Data: Maybe<DataOutput>;
  DemoTest: Maybe<DemoTestOutput>;
  Footer: Maybe<FooterOutput>;
  FooterColumn: Maybe<FooterColumnOutput>;
  GenericMedia123: Maybe<GenericMedia123Output>;
  Header: Maybe<HeaderOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LogoItemBlock: Maybe<LogoItemBlockOutput>;
  LogosBlock: Maybe<LogosBlockOutput>;
  NavItem: Maybe<NavItemOutput>;
  PortfolioGridBlock: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock: Maybe<ProfileBlockOutput>;
  SEOExperience: Maybe<SeoExperienceOutput>;
  ServiceItem: Maybe<ServiceItemOutput>;
  ServicesBlock: Maybe<ServicesBlockOutput>;
  SocialLink: Maybe<SocialLinkOutput>;
  StartPage: Maybe<StartPageOutput>;
  StoryBlock: Maybe<StoryBlockOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TestimonialItem: Maybe<TestimonialItemOutput>;
  TestimonialItemBlock: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock: Maybe<TestimonialsBlockOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryRefAvailabilityBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AvailabilityBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<AvailabilityBlockWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefCmsPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CmsPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<CmsPageWhereInput>;
};


export type QueryRefContactBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ContactBlockWhereInput>;
};


export type QueryRefDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<DataWhereInput>;
};


export type QueryRefDemoTestArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<DemoTestOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<DemoTestWhereInput>;
};


export type QueryRefFooterArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FooterWhereInput>;
};


export type QueryRefFooterColumnArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterColumnOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<FooterColumnWhereInput>;
};


export type QueryRefGenericMedia123Args = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMedia123OrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<GenericMedia123WhereInput>;
};


export type QueryRefHeaderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeaderWhereInput>;
};


export type QueryRefHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefLogoItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogoItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LogoItemBlockWhereInput>;
};


export type QueryRefLogosBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogosBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<LogosBlockWhereInput>;
};


export type QueryRefNavItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<NavItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<NavItemWhereInput>;
};


export type QueryRefPortfolioGridBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioGridBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<PortfolioGridBlockWhereInput>;
};


export type QueryRefPortfolioItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<PortfolioItemBlockWhereInput>;
};


export type QueryRefProfileBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProfileBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ProfileBlockWhereInput>;
};


export type QueryRefSeoExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SeoExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SeoExperienceWhereInput>;
};


export type QueryRefServiceItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServiceItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ServiceItemWhereInput>;
};


export type QueryRefServicesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServicesBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<ServicesBlockWhereInput>;
};


export type QueryRefSocialLinkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialLinkOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SocialLinkWhereInput>;
};


export type QueryRefStartPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StartPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<StartPageWhereInput>;
};


export type QueryRefStoryBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StoryBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<StoryBlockWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTestimonialItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialItemWhereInput>;
};


export type QueryRefTestimonialItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialItemBlockWhereInput>;
};


export type QueryRefTestimonialsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<TestimonialsBlockWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  where: InputMaybe<_VideoWhereInput>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

export type SeoExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'SEOExperience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type SeoExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SeoExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SeoExperienceAutocomplete = {
  __typename?: 'SEOExperienceAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type SeoExperienceFacet = {
  __typename?: 'SEOExperienceFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type SeoExperienceOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type SeoExperienceOutput = {
  __typename?: 'SEOExperienceOutput';
  autocomplete: Maybe<SeoExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SeoExperienceFacet>;
  item: Maybe<SeoExperience>;
  items: Maybe<Array<Maybe<SeoExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SeoExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SeoExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type ServiceItem = IData & _IComponent & _IContent & {
  __typename?: 'ServiceItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  description: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ServiceItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServiceItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ServiceItemAutocomplete = {
  __typename?: 'ServiceItemAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ServiceItemFacet = {
  __typename?: 'ServiceItemFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ServiceItemOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ServiceItemOutput = {
  __typename?: 'ServiceItemOutput';
  autocomplete: Maybe<ServiceItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ServiceItemFacet>;
  item: Maybe<ServiceItem>;
  items: Maybe<Array<Maybe<ServiceItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ServiceItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
};

export type ServicesBlock = IData & _IComponent & _IContent & {
  __typename?: 'ServicesBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  services: Maybe<Array<Maybe<_IContent>>>;
};


export type ServicesBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServicesBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ServicesBlockAutocomplete = {
  __typename?: 'ServicesBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  services: Maybe<_IContentAutocomplete>;
};

export type ServicesBlockFacet = {
  __typename?: 'ServicesBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  services: Maybe<_IContentFacet>;
};

export type ServicesBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  services: InputMaybe<_IContentOrderByInput>;
};

export type ServicesBlockOutput = {
  __typename?: 'ServicesBlockOutput';
  autocomplete: Maybe<ServicesBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ServicesBlockFacet>;
  item: Maybe<ServicesBlock>;
  items: Maybe<Array<Maybe<ServicesBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ServicesBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServicesBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  services: InputMaybe<_IContentWhereInput>;
};

export type SocialLink = IData & _IComponent & _IContent & {
  __typename?: 'SocialLink';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  href: Maybe<Scalars['String']['output']>;
  platform: Maybe<Scalars['String']['output']>;
};


export type SocialLink_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SocialLink_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SocialLinkAutocomplete = {
  __typename?: 'SocialLinkAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SocialLinkFacet = {
  __typename?: 'SocialLinkFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SocialLinkOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SocialLinkOutput = {
  __typename?: 'SocialLinkOutput';
  autocomplete: Maybe<SocialLinkAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SocialLinkFacet>;
  item: Maybe<SocialLink>;
  items: Maybe<Array<Maybe<SocialLink>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SocialLinkOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SocialLinkWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
};

export type StartPage = IData & _IContent & _IPage & {
  __typename?: 'StartPage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type StartPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StartPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
};

export type StartPageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
};

export type StartPageOutput = {
  __typename?: 'StartPageOutput';
  autocomplete: Maybe<StartPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StartPageFacet>;
  item: Maybe<StartPage>;
  items: Maybe<Array<Maybe<StartPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StartPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StartPageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  blocks: InputMaybe<_IContentWhereInput>;
};

export type StoryBlock = IData & _IComponent & _IContent & {
  __typename?: 'StoryBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  highlights: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  story: Maybe<Scalars['String']['output']>;
};


export type StoryBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StoryBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StoryBlockAutocomplete = {
  __typename?: 'StoryBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type StoryBlockFacet = {
  __typename?: 'StoryBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type StoryBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type StoryBlockOutput = {
  __typename?: 'StoryBlockOutput';
  autocomplete: Maybe<StoryBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StoryBlockFacet>;
  item: Maybe<StoryBlock>;
  items: Maybe<Array<Maybe<StoryBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StoryBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StoryBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export type SysContentFolder = IData & _IContent & _IFolder & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type SysContentFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete: Maybe<SysContentFolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SysContentFolderFacet>;
  item: Maybe<SysContentFolder>;
  items: Maybe<Array<Maybe<SysContentFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TestimonialItem = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  avatarSrc: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  fullName: Maybe<Scalars['String']['output']>;
  position: Maybe<Scalars['String']['output']>;
};


export type TestimonialItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialItemAutocomplete = {
  __typename?: 'TestimonialItemAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TestimonialItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  avatarSrc: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  fullName: Maybe<Scalars['String']['output']>;
  position: Maybe<Scalars['String']['output']>;
};


export type TestimonialItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialItemBlockAutocomplete = {
  __typename?: 'TestimonialItemBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TestimonialItemBlockFacet = {
  __typename?: 'TestimonialItemBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TestimonialItemBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialItemBlockOutput = {
  __typename?: 'TestimonialItemBlockOutput';
  autocomplete: Maybe<TestimonialItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialItemBlockFacet>;
  item: Maybe<TestimonialItemBlock>;
  items: Maybe<Array<Maybe<TestimonialItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
};

export type TestimonialItemFacet = {
  __typename?: 'TestimonialItemFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TestimonialItemOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialItemOutput = {
  __typename?: 'TestimonialItemOutput';
  autocomplete: Maybe<TestimonialItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialItemFacet>;
  item: Maybe<TestimonialItem>;
  items: Maybe<Array<Maybe<TestimonialItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
};

export type TestimonialsBlock = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialsBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  testimonials: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type TestimonialsBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialsBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialsBlockAutocomplete = {
  __typename?: 'TestimonialsBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  testimonials: Maybe<_IContentAutocomplete>;
};

export type TestimonialsBlockFacet = {
  __typename?: 'TestimonialsBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  testimonials: Maybe<_IContentFacet>;
};

export type TestimonialsBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  testimonials: InputMaybe<_IContentOrderByInput>;
};

export type TestimonialsBlockOutput = {
  __typename?: 'TestimonialsBlockOutput';
  autocomplete: Maybe<TestimonialsBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialsBlockFacet>;
  item: Maybe<TestimonialsBlock>;
  items: Maybe<Array<Maybe<TestimonialsBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialsBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialsBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  testimonials: InputMaybe<_IContentWhereInput>;
};

export type VideoMedia = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type VideoMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete: Maybe<VideoMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoMediaFacet>;
  item: Maybe<VideoMedia>;
  items: Maybe<Array<Maybe<VideoMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type _Component = IData & _IComponent & _IContent & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Component_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Component_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete: Maybe<_ComponentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ComponentFacet>;
  item: Maybe<_IComponent>;
  items: Maybe<Array<Maybe<_IComponent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData & _IContent & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Content_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Content_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete: Maybe<_ContentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ContentFacet>;
  item: Maybe<_IContent>;
  items: Maybe<Array<Maybe<_IContent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Experience = IData & _IContent & _IExperience & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Experience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Experience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete: Maybe<_ExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ExperienceFacet>;
  item: Maybe<_IExperience>;
  items: Maybe<Array<Maybe<_IExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Folder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Folder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete: Maybe<_FolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_FolderFacet>;
  item: Maybe<_IFolder>;
  items: Maybe<Array<Maybe<_IFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IComponent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IComponent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IContent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IContent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _IExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IImage = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IImage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IImage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _ISection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _ISection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IVideo_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IVideo_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IContent & _IImage & _IMedia & {
  __typename?: '_Image';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Image_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Image_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ImageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete: Maybe<_ImageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ImageFacet>;
  item: Maybe<_IImage>;
  items: Maybe<Array<Maybe<_IImage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Media = IData & _IContent & _IMedia & {
  __typename?: '_Media';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Media_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Media_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete: Maybe<_MediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_MediaFacet>;
  item: Maybe<_IMedia>;
  items: Maybe<Array<Maybe<_IMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Page = IData & _IContent & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Page_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Page_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete: Maybe<_PageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_PageFacet>;
  item: Maybe<_IPage>;
  items: Maybe<Array<Maybe<_IPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData & _IComponent & _IContent & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Section_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Section_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete: Maybe<_SectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_SectionFacet>;
  item: Maybe<_ISection>;
  items: Maybe<Array<Maybe<_ISection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: '_Video';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Video_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Video_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete: Maybe<_VideoAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_VideoFacet>;
  item: Maybe<_IVideo>;
  items: Maybe<Array<Maybe<_IVideo>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type AllPagesQueryVariables = Exact<{
  pageType: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type AllPagesQuery = { __typename?: 'Query', _Content: { __typename?: '_ContentOutput', items: Array<{ __typename?: 'AvailabilityBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CMSPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContactBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'DemoTest', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Footer', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'FooterColumn', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'GenericMedia123', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Header', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogoItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogosBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'NavItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioGridBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ProfileBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SEOExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServiceItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServicesBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SocialLink', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StartPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StoryBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Component', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Content', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Experience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Folder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Image', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Media', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Page', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Section', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, types: Array<string | null> | null, status: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | null> | null } | null };

export type GetContentByGuidQueryVariables = Exact<{
  guid: InputMaybe<Scalars['String']['input']>;
}>;


export type GetContentByGuidQuery = { __typename?: 'Query', _Content: { __typename?: '_ContentOutput', items: Array<{ __typename?: 'AvailabilityBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'BlankSection', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'CMSPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ContactBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'DemoTest', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Footer', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'FooterColumn', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'GenericMedia123', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'Header', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'HeroBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ImageMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogoItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'LogosBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'NavItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioGridBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'PortfolioItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ProfileBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SEOExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServiceItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'ServicesBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SocialLink', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StartPage', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'StoryBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'SysContentFolder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItem', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialItemBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'TestimonialsBlock', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: 'VideoMedia', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Component', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Content', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Experience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Folder', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Image', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Media', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Page', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Section', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | { __typename?: '_Video', _metadata: { __typename?: 'ContentMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'InstanceMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'ItemMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | { __typename?: 'MediaMetadata', displayName: string | null, version: string | null, key: string | null, url: { __typename?: 'ContentUrl', base: string | null, internal: string | null, hierarchical: string | null, default: string | null, type: string | null } | null } | null } | null> | null } | null };

export type GetFooterQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetFooterQuery = { __typename?: 'Query', Footer: { __typename?: 'FooterOutput', items: Array<{ __typename?: 'Footer', copyrightText: string | null, socialLinks: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink', platform: string | null, href: string | null } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null, columns: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn', title: string | null, links: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem', label: string | null, href: string | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetHeaderQueryVariables = Exact<{
  locale: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetHeaderQuery = { __typename?: 'Query', Header: { __typename?: 'HeaderOutput', items: Array<{ __typename?: 'Header', logo: string | null, ctaText: string | null, ctaHref: string | null, navItems: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem', label: string | null, href: string | null } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetPageByUrlQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
  slug: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPageByUrlQuery = { __typename?: 'Query', CMSPage: { __typename?: 'CMSPageOutput', items: Array<{ __typename?: 'CMSPage', title: string | null, shortDescription: string | null, keywords: string | null, _modified: any | null, blocks: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type GetStartPageQueryVariables = Exact<{
  locales: InputMaybe<Array<InputMaybe<Locales>> | InputMaybe<Locales>>;
}>;


export type GetStartPageQuery = { __typename?: 'Query', StartPage: { __typename?: 'StartPageOutput', items: Array<{ __typename?: 'StartPage', title: string | null, shortDescription: string | null, keywords: string | null, blocks: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock', title: string | null, description: string | null } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock', logos: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock', services: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null } | null> | null } | null };

export type HeroBlockFragmentFragment = { __typename?: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null };

export type ContactBlockFragmentFragment = { __typename?: 'ContactBlock', title: string | null, description: string | null };

export type LogosBlockFragmentFragment = { __typename?: 'LogosBlock', logos: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

export type PortfolioGridBlockFragmentFragment = { __typename?: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

export type ServicesBlockFragmentFragment = { __typename?: 'ServicesBlock', services: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

export type TestimonialsBlockFragmentFragment = { __typename?: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_AvailabilityBlock_Fragment = { __typename: 'AvailabilityBlock' };

type ItemsInContentArea_BlankExperience_Fragment = { __typename: 'BlankExperience' };

type ItemsInContentArea_BlankSection_Fragment = { __typename: 'BlankSection' };

type ItemsInContentArea_CmsPage_Fragment = { __typename: 'CMSPage' };

type ItemsInContentArea_ContactBlock_Fragment = { __typename: 'ContactBlock', title: string | null, description: string | null };

type ItemsInContentArea_DemoTest_Fragment = { __typename: 'DemoTest' };

type ItemsInContentArea_Footer_Fragment = { __typename: 'Footer' };

type ItemsInContentArea_FooterColumn_Fragment = { __typename: 'FooterColumn' };

type ItemsInContentArea_GenericMedia123_Fragment = { __typename: 'GenericMedia123' };

type ItemsInContentArea_Header_Fragment = { __typename: 'Header' };

type ItemsInContentArea_HeroBlock_Fragment = { __typename: 'HeroBlock', title: string | null, subtitle: string | null, decorationColorsPrimary: string | null, decorationColorsSecondary: string | null, showDecoration: boolean | null };

type ItemsInContentArea_ImageMedia_Fragment = { __typename: 'ImageMedia' };

type ItemsInContentArea_LogoItemBlock_Fragment = { __typename: 'LogoItemBlock' };

type ItemsInContentArea_LogosBlock_Fragment = { __typename: 'LogosBlock', logos: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock', src: string | null, alt: string | null } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_NavItem_Fragment = { __typename: 'NavItem' };

type ItemsInContentArea_PortfolioGridBlock_Fragment = { __typename: 'PortfolioGridBlock', title: string | null, items: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock', title: string | null, description: string | null, imageUrl: string | null, link: string | null } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_PortfolioItemBlock_Fragment = { __typename: 'PortfolioItemBlock' };

type ItemsInContentArea_ProfileBlock_Fragment = { __typename: 'ProfileBlock' };

type ItemsInContentArea_SeoExperience_Fragment = { __typename: 'SEOExperience' };

type ItemsInContentArea_ServiceItem_Fragment = { __typename: 'ServiceItem' };

type ItemsInContentArea_ServicesBlock_Fragment = { __typename: 'ServicesBlock', services: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem', title: string | null, description: string | null, icon: string | null } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock' } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_SocialLink_Fragment = { __typename: 'SocialLink' };

type ItemsInContentArea_StartPage_Fragment = { __typename: 'StartPage' };

type ItemsInContentArea_StoryBlock_Fragment = { __typename: 'StoryBlock' };

type ItemsInContentArea_SysContentFolder_Fragment = { __typename: 'SysContentFolder' };

type ItemsInContentArea_TestimonialItem_Fragment = { __typename: 'TestimonialItem' };

type ItemsInContentArea_TestimonialItemBlock_Fragment = { __typename: 'TestimonialItemBlock' };

type ItemsInContentArea_TestimonialsBlock_Fragment = { __typename: 'TestimonialsBlock', title: string | null, testimonials: Array<{ __typename: 'AvailabilityBlock' } | { __typename: 'BlankExperience' } | { __typename: 'BlankSection' } | { __typename: 'CMSPage' } | { __typename: 'ContactBlock' } | { __typename: 'DemoTest' } | { __typename: 'Footer' } | { __typename: 'FooterColumn' } | { __typename: 'GenericMedia123' } | { __typename: 'Header' } | { __typename: 'HeroBlock' } | { __typename: 'ImageMedia' } | { __typename: 'LogoItemBlock' } | { __typename: 'LogosBlock' } | { __typename: 'NavItem' } | { __typename: 'PortfolioGridBlock' } | { __typename: 'PortfolioItemBlock' } | { __typename: 'ProfileBlock' } | { __typename: 'SEOExperience' } | { __typename: 'ServiceItem' } | { __typename: 'ServicesBlock' } | { __typename: 'SocialLink' } | { __typename: 'StartPage' } | { __typename: 'StoryBlock' } | { __typename: 'SysContentFolder' } | { __typename: 'TestimonialItem' } | { __typename: 'TestimonialItemBlock', fullName: string | null, position: string | null, content: string | null, avatarSrc: string | null } | { __typename: 'TestimonialsBlock' } | { __typename: 'VideoMedia' } | { __typename: '_Component' } | { __typename: '_Content' } | { __typename: '_Experience' } | { __typename: '_Folder' } | { __typename: '_Image' } | { __typename: '_Media' } | { __typename: '_Page' } | { __typename: '_Section' } | { __typename: '_Video' } | null> | null };

type ItemsInContentArea_VideoMedia_Fragment = { __typename: 'VideoMedia' };

type ItemsInContentArea__Component_Fragment = { __typename: '_Component' };

type ItemsInContentArea__Content_Fragment = { __typename: '_Content' };

type ItemsInContentArea__Experience_Fragment = { __typename: '_Experience' };

type ItemsInContentArea__Folder_Fragment = { __typename: '_Folder' };

type ItemsInContentArea__Image_Fragment = { __typename: '_Image' };

type ItemsInContentArea__Media_Fragment = { __typename: '_Media' };

type ItemsInContentArea__Page_Fragment = { __typename: '_Page' };

type ItemsInContentArea__Section_Fragment = { __typename: '_Section' };

type ItemsInContentArea__Video_Fragment = { __typename: '_Video' };

export type ItemsInContentAreaFragment = ItemsInContentArea_AvailabilityBlock_Fragment | ItemsInContentArea_BlankExperience_Fragment | ItemsInContentArea_BlankSection_Fragment | ItemsInContentArea_CmsPage_Fragment | ItemsInContentArea_ContactBlock_Fragment | ItemsInContentArea_DemoTest_Fragment | ItemsInContentArea_Footer_Fragment | ItemsInContentArea_FooterColumn_Fragment | ItemsInContentArea_GenericMedia123_Fragment | ItemsInContentArea_Header_Fragment | ItemsInContentArea_HeroBlock_Fragment | ItemsInContentArea_ImageMedia_Fragment | ItemsInContentArea_LogoItemBlock_Fragment | ItemsInContentArea_LogosBlock_Fragment | ItemsInContentArea_NavItem_Fragment | ItemsInContentArea_PortfolioGridBlock_Fragment | ItemsInContentArea_PortfolioItemBlock_Fragment | ItemsInContentArea_ProfileBlock_Fragment | ItemsInContentArea_SeoExperience_Fragment | ItemsInContentArea_ServiceItem_Fragment | ItemsInContentArea_ServicesBlock_Fragment | ItemsInContentArea_SocialLink_Fragment | ItemsInContentArea_StartPage_Fragment | ItemsInContentArea_StoryBlock_Fragment | ItemsInContentArea_SysContentFolder_Fragment | ItemsInContentArea_TestimonialItem_Fragment | ItemsInContentArea_TestimonialItemBlock_Fragment | ItemsInContentArea_TestimonialsBlock_Fragment | ItemsInContentArea_VideoMedia_Fragment | ItemsInContentArea__Component_Fragment | ItemsInContentArea__Content_Fragment | ItemsInContentArea__Experience_Fragment | ItemsInContentArea__Folder_Fragment | ItemsInContentArea__Image_Fragment | ItemsInContentArea__Media_Fragment | ItemsInContentArea__Page_Fragment | ItemsInContentArea__Section_Fragment | ItemsInContentArea__Video_Fragment;

export const HeroBlockFragmentFragmentDoc = gql`
    fragment HeroBlockFragment on HeroBlock {
  title
  subtitle
  decorationColorsPrimary
  decorationColorsSecondary
  showDecoration
}
    `;
export const ContactBlockFragmentFragmentDoc = gql`
    fragment ContactBlockFragment on ContactBlock {
  title
  description
}
    `;
export const LogosBlockFragmentFragmentDoc = gql`
    fragment LogosBlockFragment on LogosBlock {
  logos {
    __typename
    ... on LogoItemBlock {
      src
      alt
    }
  }
}
    `;
export const PortfolioGridBlockFragmentFragmentDoc = gql`
    fragment PortfolioGridBlockFragment on PortfolioGridBlock {
  title
  items {
    __typename
    ... on PortfolioItemBlock {
      title
      description
      imageUrl
      link
    }
  }
}
    `;
export const ServicesBlockFragmentFragmentDoc = gql`
    fragment ServicesBlockFragment on ServicesBlock {
  services {
    __typename
    ... on ServiceItem {
      title
      description
      icon
    }
  }
}
    `;
export const TestimonialsBlockFragmentFragmentDoc = gql`
    fragment TestimonialsBlockFragment on TestimonialsBlock {
  title
  testimonials {
    __typename
    ... on TestimonialItemBlock {
      fullName
      position
      content
      avatarSrc
    }
  }
}
    `;
export const ItemsInContentAreaFragmentDoc = gql`
    fragment ItemsInContentArea on _IContent {
  __typename
  ...HeroBlockFragment
  ...ContactBlockFragment
  ...LogosBlockFragment
  ...PortfolioGridBlockFragment
  ...ServicesBlockFragment
  ...TestimonialsBlockFragment
}
    ${HeroBlockFragmentFragmentDoc}
${ContactBlockFragmentFragmentDoc}
${LogosBlockFragmentFragmentDoc}
${PortfolioGridBlockFragmentFragmentDoc}
${ServicesBlockFragmentFragmentDoc}
${TestimonialsBlockFragmentFragmentDoc}`;
export const AllPagesDocument = gql`
    query AllPages($pageType: [String]) {
  _Content(where: {_metadata: {types: {in: $pageType}}}) {
    items {
      _metadata {
        displayName
        url {
          base
          internal
          hierarchical
          default
          type
        }
        types
        status
      }
    }
  }
}
    `;
export const GetContentByGuidDocument = gql`
    query GetContentByGuid($guid: String) {
  _Content(where: {_metadata: {key: {eq: $guid}}}) {
    items {
      _metadata {
        displayName
        version
        key
        url {
          base
          internal
          hierarchical
          default
          type
        }
      }
    }
  }
}
    `;
export const GetFooterDocument = gql`
    query getFooter($locales: [Locales]) {
  Footer(locale: $locales) {
    items {
      copyrightText
      socialLinks {
        __typename
        ... on SocialLink {
          platform
          href
        }
      }
      columns {
        __typename
        ... on FooterColumn {
          title
          links {
            __typename
            ... on NavItem {
              label
              href
            }
          }
        }
      }
    }
  }
}
    `;
export const GetHeaderDocument = gql`
    query getHeader($locale: [Locales]) {
  Header(locale: $locale) {
    items {
      logo
      ctaText
      ctaHref
      navItems {
        __typename
        ... on NavItem {
          label
          href
        }
      }
    }
  }
}
    `;
export const GetPageByUrlDocument = gql`
    query getPageByURL($locales: [Locales], $slug: String) {
  CMSPage(locale: $locales, where: {_metadata: {url: {default: {eq: $slug}}}}) {
    items {
      title
      shortDescription
      keywords
      _modified
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export const GetStartPageDocument = gql`
    query GetStartPage($locales: [Locales]) {
  StartPage(locale: $locales) {
    items {
      title
      shortDescription
      keywords
      blocks {
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<ExecutionResult<R, E>> | AsyncIterable<ExecutionResult<R, E>>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    AllPages(variables?: AllPagesQueryVariables, options?: C): Promise<ExecutionResult<AllPagesQuery, E>> {
      return requester<AllPagesQuery, AllPagesQueryVariables>(AllPagesDocument, variables, options) as Promise<ExecutionResult<AllPagesQuery, E>>;
    },
    GetContentByGuid(variables?: GetContentByGuidQueryVariables, options?: C): Promise<ExecutionResult<GetContentByGuidQuery, E>> {
      return requester<GetContentByGuidQuery, GetContentByGuidQueryVariables>(GetContentByGuidDocument, variables, options) as Promise<ExecutionResult<GetContentByGuidQuery, E>>;
    },
    getFooter(variables?: GetFooterQueryVariables, options?: C): Promise<ExecutionResult<GetFooterQuery, E>> {
      return requester<GetFooterQuery, GetFooterQueryVariables>(GetFooterDocument, variables, options) as Promise<ExecutionResult<GetFooterQuery, E>>;
    },
    getHeader(variables?: GetHeaderQueryVariables, options?: C): Promise<ExecutionResult<GetHeaderQuery, E>> {
      return requester<GetHeaderQuery, GetHeaderQueryVariables>(GetHeaderDocument, variables, options) as Promise<ExecutionResult<GetHeaderQuery, E>>;
    },
    getPageByURL(variables?: GetPageByUrlQueryVariables, options?: C): Promise<ExecutionResult<GetPageByUrlQuery, E>> {
      return requester<GetPageByUrlQuery, GetPageByUrlQueryVariables>(GetPageByUrlDocument, variables, options) as Promise<ExecutionResult<GetPageByUrlQuery, E>>;
    },
    GetStartPage(variables?: GetStartPageQueryVariables, options?: C): Promise<ExecutionResult<GetStartPageQuery, E>> {
      return requester<GetStartPageQuery, GetStartPageQueryVariables>(GetStartPageDocument, variables, options) as Promise<ExecutionResult<GetStartPageQuery, E>>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;