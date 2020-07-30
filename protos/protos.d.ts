// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import {protobuf as $protobuf} from "google-gax";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace asset. */
        namespace asset {

            /** Namespace v1. */
            namespace v1 {

                /** Represents an AssetService */
                class AssetService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AssetService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AssetService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AssetService;

                    /**
                     * Calls ExportAssets.
                     * @param request ExportAssetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportAssets(request: google.cloud.asset.v1.IExportAssetsRequest, callback: google.cloud.asset.v1.AssetService.ExportAssetsCallback): void;

                    /**
                     * Calls ExportAssets.
                     * @param request ExportAssetsRequest message or plain object
                     * @returns Promise
                     */
                    public exportAssets(request: google.cloud.asset.v1.IExportAssetsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls BatchGetAssetsHistory.
                     * @param request BatchGetAssetsHistoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchGetAssetsHistoryResponse
                     */
                    public batchGetAssetsHistory(request: google.cloud.asset.v1.IBatchGetAssetsHistoryRequest, callback: google.cloud.asset.v1.AssetService.BatchGetAssetsHistoryCallback): void;

                    /**
                     * Calls BatchGetAssetsHistory.
                     * @param request BatchGetAssetsHistoryRequest message or plain object
                     * @returns Promise
                     */
                    public batchGetAssetsHistory(request: google.cloud.asset.v1.IBatchGetAssetsHistoryRequest): Promise<google.cloud.asset.v1.BatchGetAssetsHistoryResponse>;

                    /**
                     * Calls CreateFeed.
                     * @param request CreateFeedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Feed
                     */
                    public createFeed(request: google.cloud.asset.v1.ICreateFeedRequest, callback: google.cloud.asset.v1.AssetService.CreateFeedCallback): void;

                    /**
                     * Calls CreateFeed.
                     * @param request CreateFeedRequest message or plain object
                     * @returns Promise
                     */
                    public createFeed(request: google.cloud.asset.v1.ICreateFeedRequest): Promise<google.cloud.asset.v1.Feed>;

                    /**
                     * Calls GetFeed.
                     * @param request GetFeedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Feed
                     */
                    public getFeed(request: google.cloud.asset.v1.IGetFeedRequest, callback: google.cloud.asset.v1.AssetService.GetFeedCallback): void;

                    /**
                     * Calls GetFeed.
                     * @param request GetFeedRequest message or plain object
                     * @returns Promise
                     */
                    public getFeed(request: google.cloud.asset.v1.IGetFeedRequest): Promise<google.cloud.asset.v1.Feed>;

                    /**
                     * Calls ListFeeds.
                     * @param request ListFeedsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFeedsResponse
                     */
                    public listFeeds(request: google.cloud.asset.v1.IListFeedsRequest, callback: google.cloud.asset.v1.AssetService.ListFeedsCallback): void;

                    /**
                     * Calls ListFeeds.
                     * @param request ListFeedsRequest message or plain object
                     * @returns Promise
                     */
                    public listFeeds(request: google.cloud.asset.v1.IListFeedsRequest): Promise<google.cloud.asset.v1.ListFeedsResponse>;

                    /**
                     * Calls UpdateFeed.
                     * @param request UpdateFeedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Feed
                     */
                    public updateFeed(request: google.cloud.asset.v1.IUpdateFeedRequest, callback: google.cloud.asset.v1.AssetService.UpdateFeedCallback): void;

                    /**
                     * Calls UpdateFeed.
                     * @param request UpdateFeedRequest message or plain object
                     * @returns Promise
                     */
                    public updateFeed(request: google.cloud.asset.v1.IUpdateFeedRequest): Promise<google.cloud.asset.v1.Feed>;

                    /**
                     * Calls DeleteFeed.
                     * @param request DeleteFeedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteFeed(request: google.cloud.asset.v1.IDeleteFeedRequest, callback: google.cloud.asset.v1.AssetService.DeleteFeedCallback): void;

                    /**
                     * Calls DeleteFeed.
                     * @param request DeleteFeedRequest message or plain object
                     * @returns Promise
                     */
                    public deleteFeed(request: google.cloud.asset.v1.IDeleteFeedRequest): Promise<google.protobuf.Empty>;

                    /**
                     * Calls SearchAllResources.
                     * @param request SearchAllResourcesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchAllResourcesResponse
                     */
                    public searchAllResources(request: google.cloud.asset.v1.ISearchAllResourcesRequest, callback: google.cloud.asset.v1.AssetService.SearchAllResourcesCallback): void;

                    /**
                     * Calls SearchAllResources.
                     * @param request SearchAllResourcesRequest message or plain object
                     * @returns Promise
                     */
                    public searchAllResources(request: google.cloud.asset.v1.ISearchAllResourcesRequest): Promise<google.cloud.asset.v1.SearchAllResourcesResponse>;

                    /**
                     * Calls SearchAllIamPolicies.
                     * @param request SearchAllIamPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchAllIamPoliciesResponse
                     */
                    public searchAllIamPolicies(request: google.cloud.asset.v1.ISearchAllIamPoliciesRequest, callback: google.cloud.asset.v1.AssetService.SearchAllIamPoliciesCallback): void;

                    /**
                     * Calls SearchAllIamPolicies.
                     * @param request SearchAllIamPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public searchAllIamPolicies(request: google.cloud.asset.v1.ISearchAllIamPoliciesRequest): Promise<google.cloud.asset.v1.SearchAllIamPoliciesResponse>;
                }

                namespace AssetService {

                    /**
                     * Callback as used by {@link google.cloud.asset.v1.AssetService#exportAssets}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportAssetsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1.AssetService#batchGetAssetsHistory}.
                     * @param error Error, if any
                     * @param [response] BatchGetAssetsHistoryResponse
                     */
                    type BatchGetAssetsHistoryCallback = (error: (Error|null), response?: google.cloud.asset.v1.BatchGetAssetsHistoryResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1.AssetService#createFeed}.
                     * @param error Error, if any
                     * @param [response] Feed
                     */
                    type CreateFeedCallback = (error: (Error|null), response?: google.cloud.asset.v1.Feed) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1.AssetService#getFeed}.
                     * @param error Error, if any
                     * @param [response] Feed
                     */
                    type GetFeedCallback = (error: (Error|null), response?: google.cloud.asset.v1.Feed) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1.AssetService#listFeeds}.
                     * @param error Error, if any
                     * @param [response] ListFeedsResponse
                     */
                    type ListFeedsCallback = (error: (Error|null), response?: google.cloud.asset.v1.ListFeedsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1.AssetService#updateFeed}.
                     * @param error Error, if any
                     * @param [response] Feed
                     */
                    type UpdateFeedCallback = (error: (Error|null), response?: google.cloud.asset.v1.Feed) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1.AssetService#deleteFeed}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteFeedCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1.AssetService#searchAllResources}.
                     * @param error Error, if any
                     * @param [response] SearchAllResourcesResponse
                     */
                    type SearchAllResourcesCallback = (error: (Error|null), response?: google.cloud.asset.v1.SearchAllResourcesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1.AssetService#searchAllIamPolicies}.
                     * @param error Error, if any
                     * @param [response] SearchAllIamPoliciesResponse
                     */
                    type SearchAllIamPoliciesCallback = (error: (Error|null), response?: google.cloud.asset.v1.SearchAllIamPoliciesResponse) => void;
                }

                /** Properties of an ExportAssetsRequest. */
                interface IExportAssetsRequest {

                    /** ExportAssetsRequest parent */
                    parent?: (string|null);

                    /** ExportAssetsRequest readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ExportAssetsRequest assetTypes */
                    assetTypes?: (string[]|null);

                    /** ExportAssetsRequest contentType */
                    contentType?: (google.cloud.asset.v1.ContentType|keyof typeof google.cloud.asset.v1.ContentType|null);

                    /** ExportAssetsRequest outputConfig */
                    outputConfig?: (google.cloud.asset.v1.IOutputConfig|null);
                }

                /** Represents an ExportAssetsRequest. */
                class ExportAssetsRequest implements IExportAssetsRequest {

                    /**
                     * Constructs a new ExportAssetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IExportAssetsRequest);

                    /** ExportAssetsRequest parent. */
                    public parent: string;

                    /** ExportAssetsRequest readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ExportAssetsRequest assetTypes. */
                    public assetTypes: string[];

                    /** ExportAssetsRequest contentType. */
                    public contentType: (google.cloud.asset.v1.ContentType|keyof typeof google.cloud.asset.v1.ContentType);

                    /** ExportAssetsRequest outputConfig. */
                    public outputConfig?: (google.cloud.asset.v1.IOutputConfig|null);

                    /**
                     * Creates a new ExportAssetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportAssetsRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IExportAssetsRequest): google.cloud.asset.v1.ExportAssetsRequest;

                    /**
                     * Encodes the specified ExportAssetsRequest message. Does not implicitly {@link google.cloud.asset.v1.ExportAssetsRequest.verify|verify} messages.
                     * @param message ExportAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IExportAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportAssetsRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1.ExportAssetsRequest.verify|verify} messages.
                     * @param message ExportAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IExportAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportAssetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.ExportAssetsRequest;

                    /**
                     * Decodes an ExportAssetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.ExportAssetsRequest;

                    /**
                     * Verifies an ExportAssetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportAssetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportAssetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.ExportAssetsRequest;

                    /**
                     * Creates a plain object from an ExportAssetsRequest message. Also converts values to other types if specified.
                     * @param message ExportAssetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.ExportAssetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportAssetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExportAssetsResponse. */
                interface IExportAssetsResponse {

                    /** ExportAssetsResponse readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ExportAssetsResponse outputConfig */
                    outputConfig?: (google.cloud.asset.v1.IOutputConfig|null);
                }

                /** Represents an ExportAssetsResponse. */
                class ExportAssetsResponse implements IExportAssetsResponse {

                    /**
                     * Constructs a new ExportAssetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IExportAssetsResponse);

                    /** ExportAssetsResponse readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ExportAssetsResponse outputConfig. */
                    public outputConfig?: (google.cloud.asset.v1.IOutputConfig|null);

                    /**
                     * Creates a new ExportAssetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportAssetsResponse instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IExportAssetsResponse): google.cloud.asset.v1.ExportAssetsResponse;

                    /**
                     * Encodes the specified ExportAssetsResponse message. Does not implicitly {@link google.cloud.asset.v1.ExportAssetsResponse.verify|verify} messages.
                     * @param message ExportAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IExportAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportAssetsResponse message, length delimited. Does not implicitly {@link google.cloud.asset.v1.ExportAssetsResponse.verify|verify} messages.
                     * @param message ExportAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IExportAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportAssetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.ExportAssetsResponse;

                    /**
                     * Decodes an ExportAssetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.ExportAssetsResponse;

                    /**
                     * Verifies an ExportAssetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportAssetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportAssetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.ExportAssetsResponse;

                    /**
                     * Creates a plain object from an ExportAssetsResponse message. Also converts values to other types if specified.
                     * @param message ExportAssetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.ExportAssetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportAssetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchGetAssetsHistoryRequest. */
                interface IBatchGetAssetsHistoryRequest {

                    /** BatchGetAssetsHistoryRequest parent */
                    parent?: (string|null);

                    /** BatchGetAssetsHistoryRequest assetNames */
                    assetNames?: (string[]|null);

                    /** BatchGetAssetsHistoryRequest contentType */
                    contentType?: (google.cloud.asset.v1.ContentType|keyof typeof google.cloud.asset.v1.ContentType|null);

                    /** BatchGetAssetsHistoryRequest readTimeWindow */
                    readTimeWindow?: (google.cloud.asset.v1.ITimeWindow|null);
                }

                /** Represents a BatchGetAssetsHistoryRequest. */
                class BatchGetAssetsHistoryRequest implements IBatchGetAssetsHistoryRequest {

                    /**
                     * Constructs a new BatchGetAssetsHistoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IBatchGetAssetsHistoryRequest);

                    /** BatchGetAssetsHistoryRequest parent. */
                    public parent: string;

                    /** BatchGetAssetsHistoryRequest assetNames. */
                    public assetNames: string[];

                    /** BatchGetAssetsHistoryRequest contentType. */
                    public contentType: (google.cloud.asset.v1.ContentType|keyof typeof google.cloud.asset.v1.ContentType);

                    /** BatchGetAssetsHistoryRequest readTimeWindow. */
                    public readTimeWindow?: (google.cloud.asset.v1.ITimeWindow|null);

                    /**
                     * Creates a new BatchGetAssetsHistoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchGetAssetsHistoryRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IBatchGetAssetsHistoryRequest): google.cloud.asset.v1.BatchGetAssetsHistoryRequest;

                    /**
                     * Encodes the specified BatchGetAssetsHistoryRequest message. Does not implicitly {@link google.cloud.asset.v1.BatchGetAssetsHistoryRequest.verify|verify} messages.
                     * @param message BatchGetAssetsHistoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IBatchGetAssetsHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchGetAssetsHistoryRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1.BatchGetAssetsHistoryRequest.verify|verify} messages.
                     * @param message BatchGetAssetsHistoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IBatchGetAssetsHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchGetAssetsHistoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchGetAssetsHistoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.BatchGetAssetsHistoryRequest;

                    /**
                     * Decodes a BatchGetAssetsHistoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchGetAssetsHistoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.BatchGetAssetsHistoryRequest;

                    /**
                     * Verifies a BatchGetAssetsHistoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchGetAssetsHistoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchGetAssetsHistoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.BatchGetAssetsHistoryRequest;

                    /**
                     * Creates a plain object from a BatchGetAssetsHistoryRequest message. Also converts values to other types if specified.
                     * @param message BatchGetAssetsHistoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.BatchGetAssetsHistoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchGetAssetsHistoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchGetAssetsHistoryResponse. */
                interface IBatchGetAssetsHistoryResponse {

                    /** BatchGetAssetsHistoryResponse assets */
                    assets?: (google.cloud.asset.v1.ITemporalAsset[]|null);
                }

                /** Represents a BatchGetAssetsHistoryResponse. */
                class BatchGetAssetsHistoryResponse implements IBatchGetAssetsHistoryResponse {

                    /**
                     * Constructs a new BatchGetAssetsHistoryResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IBatchGetAssetsHistoryResponse);

                    /** BatchGetAssetsHistoryResponse assets. */
                    public assets: google.cloud.asset.v1.ITemporalAsset[];

                    /**
                     * Creates a new BatchGetAssetsHistoryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchGetAssetsHistoryResponse instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IBatchGetAssetsHistoryResponse): google.cloud.asset.v1.BatchGetAssetsHistoryResponse;

                    /**
                     * Encodes the specified BatchGetAssetsHistoryResponse message. Does not implicitly {@link google.cloud.asset.v1.BatchGetAssetsHistoryResponse.verify|verify} messages.
                     * @param message BatchGetAssetsHistoryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IBatchGetAssetsHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchGetAssetsHistoryResponse message, length delimited. Does not implicitly {@link google.cloud.asset.v1.BatchGetAssetsHistoryResponse.verify|verify} messages.
                     * @param message BatchGetAssetsHistoryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IBatchGetAssetsHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchGetAssetsHistoryResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchGetAssetsHistoryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.BatchGetAssetsHistoryResponse;

                    /**
                     * Decodes a BatchGetAssetsHistoryResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchGetAssetsHistoryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.BatchGetAssetsHistoryResponse;

                    /**
                     * Verifies a BatchGetAssetsHistoryResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchGetAssetsHistoryResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchGetAssetsHistoryResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.BatchGetAssetsHistoryResponse;

                    /**
                     * Creates a plain object from a BatchGetAssetsHistoryResponse message. Also converts values to other types if specified.
                     * @param message BatchGetAssetsHistoryResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.BatchGetAssetsHistoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchGetAssetsHistoryResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateFeedRequest. */
                interface ICreateFeedRequest {

                    /** CreateFeedRequest parent */
                    parent?: (string|null);

                    /** CreateFeedRequest feedId */
                    feedId?: (string|null);

                    /** CreateFeedRequest feed */
                    feed?: (google.cloud.asset.v1.IFeed|null);
                }

                /** Represents a CreateFeedRequest. */
                class CreateFeedRequest implements ICreateFeedRequest {

                    /**
                     * Constructs a new CreateFeedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.ICreateFeedRequest);

                    /** CreateFeedRequest parent. */
                    public parent: string;

                    /** CreateFeedRequest feedId. */
                    public feedId: string;

                    /** CreateFeedRequest feed. */
                    public feed?: (google.cloud.asset.v1.IFeed|null);

                    /**
                     * Creates a new CreateFeedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateFeedRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1.ICreateFeedRequest): google.cloud.asset.v1.CreateFeedRequest;

                    /**
                     * Encodes the specified CreateFeedRequest message. Does not implicitly {@link google.cloud.asset.v1.CreateFeedRequest.verify|verify} messages.
                     * @param message CreateFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.ICreateFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateFeedRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1.CreateFeedRequest.verify|verify} messages.
                     * @param message CreateFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.ICreateFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateFeedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.CreateFeedRequest;

                    /**
                     * Decodes a CreateFeedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.CreateFeedRequest;

                    /**
                     * Verifies a CreateFeedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateFeedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateFeedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.CreateFeedRequest;

                    /**
                     * Creates a plain object from a CreateFeedRequest message. Also converts values to other types if specified.
                     * @param message CreateFeedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.CreateFeedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateFeedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetFeedRequest. */
                interface IGetFeedRequest {

                    /** GetFeedRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFeedRequest. */
                class GetFeedRequest implements IGetFeedRequest {

                    /**
                     * Constructs a new GetFeedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IGetFeedRequest);

                    /** GetFeedRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFeedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFeedRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IGetFeedRequest): google.cloud.asset.v1.GetFeedRequest;

                    /**
                     * Encodes the specified GetFeedRequest message. Does not implicitly {@link google.cloud.asset.v1.GetFeedRequest.verify|verify} messages.
                     * @param message GetFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IGetFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFeedRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1.GetFeedRequest.verify|verify} messages.
                     * @param message GetFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IGetFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFeedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.GetFeedRequest;

                    /**
                     * Decodes a GetFeedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.GetFeedRequest;

                    /**
                     * Verifies a GetFeedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFeedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFeedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.GetFeedRequest;

                    /**
                     * Creates a plain object from a GetFeedRequest message. Also converts values to other types if specified.
                     * @param message GetFeedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.GetFeedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFeedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFeedsRequest. */
                interface IListFeedsRequest {

                    /** ListFeedsRequest parent */
                    parent?: (string|null);
                }

                /** Represents a ListFeedsRequest. */
                class ListFeedsRequest implements IListFeedsRequest {

                    /**
                     * Constructs a new ListFeedsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IListFeedsRequest);

                    /** ListFeedsRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new ListFeedsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFeedsRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IListFeedsRequest): google.cloud.asset.v1.ListFeedsRequest;

                    /**
                     * Encodes the specified ListFeedsRequest message. Does not implicitly {@link google.cloud.asset.v1.ListFeedsRequest.verify|verify} messages.
                     * @param message ListFeedsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IListFeedsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFeedsRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1.ListFeedsRequest.verify|verify} messages.
                     * @param message ListFeedsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IListFeedsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFeedsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFeedsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.ListFeedsRequest;

                    /**
                     * Decodes a ListFeedsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFeedsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.ListFeedsRequest;

                    /**
                     * Verifies a ListFeedsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFeedsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFeedsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.ListFeedsRequest;

                    /**
                     * Creates a plain object from a ListFeedsRequest message. Also converts values to other types if specified.
                     * @param message ListFeedsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.ListFeedsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFeedsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFeedsResponse. */
                interface IListFeedsResponse {

                    /** ListFeedsResponse feeds */
                    feeds?: (google.cloud.asset.v1.IFeed[]|null);
                }

                /** Represents a ListFeedsResponse. */
                class ListFeedsResponse implements IListFeedsResponse {

                    /**
                     * Constructs a new ListFeedsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IListFeedsResponse);

                    /** ListFeedsResponse feeds. */
                    public feeds: google.cloud.asset.v1.IFeed[];

                    /**
                     * Creates a new ListFeedsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFeedsResponse instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IListFeedsResponse): google.cloud.asset.v1.ListFeedsResponse;

                    /**
                     * Encodes the specified ListFeedsResponse message. Does not implicitly {@link google.cloud.asset.v1.ListFeedsResponse.verify|verify} messages.
                     * @param message ListFeedsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IListFeedsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFeedsResponse message, length delimited. Does not implicitly {@link google.cloud.asset.v1.ListFeedsResponse.verify|verify} messages.
                     * @param message ListFeedsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IListFeedsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFeedsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFeedsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.ListFeedsResponse;

                    /**
                     * Decodes a ListFeedsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFeedsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.ListFeedsResponse;

                    /**
                     * Verifies a ListFeedsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFeedsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFeedsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.ListFeedsResponse;

                    /**
                     * Creates a plain object from a ListFeedsResponse message. Also converts values to other types if specified.
                     * @param message ListFeedsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.ListFeedsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFeedsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateFeedRequest. */
                interface IUpdateFeedRequest {

                    /** UpdateFeedRequest feed */
                    feed?: (google.cloud.asset.v1.IFeed|null);

                    /** UpdateFeedRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateFeedRequest. */
                class UpdateFeedRequest implements IUpdateFeedRequest {

                    /**
                     * Constructs a new UpdateFeedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IUpdateFeedRequest);

                    /** UpdateFeedRequest feed. */
                    public feed?: (google.cloud.asset.v1.IFeed|null);

                    /** UpdateFeedRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateFeedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFeedRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IUpdateFeedRequest): google.cloud.asset.v1.UpdateFeedRequest;

                    /**
                     * Encodes the specified UpdateFeedRequest message. Does not implicitly {@link google.cloud.asset.v1.UpdateFeedRequest.verify|verify} messages.
                     * @param message UpdateFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IUpdateFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFeedRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1.UpdateFeedRequest.verify|verify} messages.
                     * @param message UpdateFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IUpdateFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFeedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.UpdateFeedRequest;

                    /**
                     * Decodes an UpdateFeedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.UpdateFeedRequest;

                    /**
                     * Verifies an UpdateFeedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFeedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFeedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.UpdateFeedRequest;

                    /**
                     * Creates a plain object from an UpdateFeedRequest message. Also converts values to other types if specified.
                     * @param message UpdateFeedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.UpdateFeedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFeedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteFeedRequest. */
                interface IDeleteFeedRequest {

                    /** DeleteFeedRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteFeedRequest. */
                class DeleteFeedRequest implements IDeleteFeedRequest {

                    /**
                     * Constructs a new DeleteFeedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IDeleteFeedRequest);

                    /** DeleteFeedRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteFeedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteFeedRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IDeleteFeedRequest): google.cloud.asset.v1.DeleteFeedRequest;

                    /**
                     * Encodes the specified DeleteFeedRequest message. Does not implicitly {@link google.cloud.asset.v1.DeleteFeedRequest.verify|verify} messages.
                     * @param message DeleteFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IDeleteFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteFeedRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1.DeleteFeedRequest.verify|verify} messages.
                     * @param message DeleteFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IDeleteFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteFeedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.DeleteFeedRequest;

                    /**
                     * Decodes a DeleteFeedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.DeleteFeedRequest;

                    /**
                     * Verifies a DeleteFeedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteFeedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteFeedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.DeleteFeedRequest;

                    /**
                     * Creates a plain object from a DeleteFeedRequest message. Also converts values to other types if specified.
                     * @param message DeleteFeedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.DeleteFeedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteFeedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OutputConfig. */
                interface IOutputConfig {

                    /** OutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.asset.v1.IGcsDestination|null);

                    /** OutputConfig bigqueryDestination */
                    bigqueryDestination?: (google.cloud.asset.v1.IBigQueryDestination|null);
                }

                /** Represents an OutputConfig. */
                class OutputConfig implements IOutputConfig {

                    /**
                     * Constructs a new OutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IOutputConfig);

                    /** OutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.asset.v1.IGcsDestination|null);

                    /** OutputConfig bigqueryDestination. */
                    public bigqueryDestination?: (google.cloud.asset.v1.IBigQueryDestination|null);

                    /** OutputConfig destination. */
                    public destination?: ("gcsDestination"|"bigqueryDestination");

                    /**
                     * Creates a new OutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputConfig instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IOutputConfig): google.cloud.asset.v1.OutputConfig;

                    /**
                     * Encodes the specified OutputConfig message. Does not implicitly {@link google.cloud.asset.v1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutputConfig message, length delimited. Does not implicitly {@link google.cloud.asset.v1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.OutputConfig;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.OutputConfig;

                    /**
                     * Verifies an OutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.OutputConfig;

                    /**
                     * Creates a plain object from an OutputConfig message. Also converts values to other types if specified.
                     * @param message OutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.OutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsDestination. */
                interface IGcsDestination {

                    /** GcsDestination uri */
                    uri?: (string|null);

                    /** GcsDestination uriPrefix */
                    uriPrefix?: (string|null);
                }

                /** Represents a GcsDestination. */
                class GcsDestination implements IGcsDestination {

                    /**
                     * Constructs a new GcsDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IGcsDestination);

                    /** GcsDestination uri. */
                    public uri: string;

                    /** GcsDestination uriPrefix. */
                    public uriPrefix: string;

                    /** GcsDestination objectUri. */
                    public objectUri?: ("uri"|"uriPrefix");

                    /**
                     * Creates a new GcsDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDestination instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IGcsDestination): google.cloud.asset.v1.GcsDestination;

                    /**
                     * Encodes the specified GcsDestination message. Does not implicitly {@link google.cloud.asset.v1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsDestination message, length delimited. Does not implicitly {@link google.cloud.asset.v1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.GcsDestination;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.GcsDestination;

                    /**
                     * Verifies a GcsDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.GcsDestination;

                    /**
                     * Creates a plain object from a GcsDestination message. Also converts values to other types if specified.
                     * @param message GcsDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.GcsDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BigQueryDestination. */
                interface IBigQueryDestination {

                    /** BigQueryDestination dataset */
                    dataset?: (string|null);

                    /** BigQueryDestination table */
                    table?: (string|null);

                    /** BigQueryDestination force */
                    force?: (boolean|null);
                }

                /** Represents a BigQueryDestination. */
                class BigQueryDestination implements IBigQueryDestination {

                    /**
                     * Constructs a new BigQueryDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IBigQueryDestination);

                    /** BigQueryDestination dataset. */
                    public dataset: string;

                    /** BigQueryDestination table. */
                    public table: string;

                    /** BigQueryDestination force. */
                    public force: boolean;

                    /**
                     * Creates a new BigQueryDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BigQueryDestination instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IBigQueryDestination): google.cloud.asset.v1.BigQueryDestination;

                    /**
                     * Encodes the specified BigQueryDestination message. Does not implicitly {@link google.cloud.asset.v1.BigQueryDestination.verify|verify} messages.
                     * @param message BigQueryDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IBigQueryDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BigQueryDestination message, length delimited. Does not implicitly {@link google.cloud.asset.v1.BigQueryDestination.verify|verify} messages.
                     * @param message BigQueryDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IBigQueryDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BigQueryDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BigQueryDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.BigQueryDestination;

                    /**
                     * Decodes a BigQueryDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BigQueryDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.BigQueryDestination;

                    /**
                     * Verifies a BigQueryDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BigQueryDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BigQueryDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.BigQueryDestination;

                    /**
                     * Creates a plain object from a BigQueryDestination message. Also converts values to other types if specified.
                     * @param message BigQueryDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.BigQueryDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BigQueryDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PubsubDestination. */
                interface IPubsubDestination {

                    /** PubsubDestination topic */
                    topic?: (string|null);
                }

                /** Represents a PubsubDestination. */
                class PubsubDestination implements IPubsubDestination {

                    /**
                     * Constructs a new PubsubDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IPubsubDestination);

                    /** PubsubDestination topic. */
                    public topic: string;

                    /**
                     * Creates a new PubsubDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PubsubDestination instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IPubsubDestination): google.cloud.asset.v1.PubsubDestination;

                    /**
                     * Encodes the specified PubsubDestination message. Does not implicitly {@link google.cloud.asset.v1.PubsubDestination.verify|verify} messages.
                     * @param message PubsubDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IPubsubDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PubsubDestination message, length delimited. Does not implicitly {@link google.cloud.asset.v1.PubsubDestination.verify|verify} messages.
                     * @param message PubsubDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IPubsubDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PubsubDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PubsubDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.PubsubDestination;

                    /**
                     * Decodes a PubsubDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PubsubDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.PubsubDestination;

                    /**
                     * Verifies a PubsubDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PubsubDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PubsubDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.PubsubDestination;

                    /**
                     * Creates a plain object from a PubsubDestination message. Also converts values to other types if specified.
                     * @param message PubsubDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.PubsubDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PubsubDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FeedOutputConfig. */
                interface IFeedOutputConfig {

                    /** FeedOutputConfig pubsubDestination */
                    pubsubDestination?: (google.cloud.asset.v1.IPubsubDestination|null);
                }

                /** Represents a FeedOutputConfig. */
                class FeedOutputConfig implements IFeedOutputConfig {

                    /**
                     * Constructs a new FeedOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IFeedOutputConfig);

                    /** FeedOutputConfig pubsubDestination. */
                    public pubsubDestination?: (google.cloud.asset.v1.IPubsubDestination|null);

                    /** FeedOutputConfig destination. */
                    public destination?: "pubsubDestination";

                    /**
                     * Creates a new FeedOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FeedOutputConfig instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IFeedOutputConfig): google.cloud.asset.v1.FeedOutputConfig;

                    /**
                     * Encodes the specified FeedOutputConfig message. Does not implicitly {@link google.cloud.asset.v1.FeedOutputConfig.verify|verify} messages.
                     * @param message FeedOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IFeedOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FeedOutputConfig message, length delimited. Does not implicitly {@link google.cloud.asset.v1.FeedOutputConfig.verify|verify} messages.
                     * @param message FeedOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IFeedOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FeedOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FeedOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.FeedOutputConfig;

                    /**
                     * Decodes a FeedOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FeedOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.FeedOutputConfig;

                    /**
                     * Verifies a FeedOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FeedOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FeedOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.FeedOutputConfig;

                    /**
                     * Creates a plain object from a FeedOutputConfig message. Also converts values to other types if specified.
                     * @param message FeedOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.FeedOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FeedOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Feed. */
                interface IFeed {

                    /** Feed name */
                    name?: (string|null);

                    /** Feed assetNames */
                    assetNames?: (string[]|null);

                    /** Feed assetTypes */
                    assetTypes?: (string[]|null);

                    /** Feed contentType */
                    contentType?: (google.cloud.asset.v1.ContentType|keyof typeof google.cloud.asset.v1.ContentType|null);

                    /** Feed feedOutputConfig */
                    feedOutputConfig?: (google.cloud.asset.v1.IFeedOutputConfig|null);

                    /** Feed condition */
                    condition?: (google.type.IExpr|null);
                }

                /** Represents a Feed. */
                class Feed implements IFeed {

                    /**
                     * Constructs a new Feed.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IFeed);

                    /** Feed name. */
                    public name: string;

                    /** Feed assetNames. */
                    public assetNames: string[];

                    /** Feed assetTypes. */
                    public assetTypes: string[];

                    /** Feed contentType. */
                    public contentType: (google.cloud.asset.v1.ContentType|keyof typeof google.cloud.asset.v1.ContentType);

                    /** Feed feedOutputConfig. */
                    public feedOutputConfig?: (google.cloud.asset.v1.IFeedOutputConfig|null);

                    /** Feed condition. */
                    public condition?: (google.type.IExpr|null);

                    /**
                     * Creates a new Feed instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Feed instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IFeed): google.cloud.asset.v1.Feed;

                    /**
                     * Encodes the specified Feed message. Does not implicitly {@link google.cloud.asset.v1.Feed.verify|verify} messages.
                     * @param message Feed message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IFeed, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Feed message, length delimited. Does not implicitly {@link google.cloud.asset.v1.Feed.verify|verify} messages.
                     * @param message Feed message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IFeed, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Feed message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Feed
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.Feed;

                    /**
                     * Decodes a Feed message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Feed
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.Feed;

                    /**
                     * Verifies a Feed message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Feed message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Feed
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.Feed;

                    /**
                     * Creates a plain object from a Feed message. Also converts values to other types if specified.
                     * @param message Feed
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.Feed, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Feed to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchAllResourcesRequest. */
                interface ISearchAllResourcesRequest {

                    /** SearchAllResourcesRequest scope */
                    scope?: (string|null);

                    /** SearchAllResourcesRequest query */
                    query?: (string|null);

                    /** SearchAllResourcesRequest assetTypes */
                    assetTypes?: (string[]|null);

                    /** SearchAllResourcesRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchAllResourcesRequest pageToken */
                    pageToken?: (string|null);

                    /** SearchAllResourcesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a SearchAllResourcesRequest. */
                class SearchAllResourcesRequest implements ISearchAllResourcesRequest {

                    /**
                     * Constructs a new SearchAllResourcesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.ISearchAllResourcesRequest);

                    /** SearchAllResourcesRequest scope. */
                    public scope: string;

                    /** SearchAllResourcesRequest query. */
                    public query: string;

                    /** SearchAllResourcesRequest assetTypes. */
                    public assetTypes: string[];

                    /** SearchAllResourcesRequest pageSize. */
                    public pageSize: number;

                    /** SearchAllResourcesRequest pageToken. */
                    public pageToken: string;

                    /** SearchAllResourcesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new SearchAllResourcesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchAllResourcesRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1.ISearchAllResourcesRequest): google.cloud.asset.v1.SearchAllResourcesRequest;

                    /**
                     * Encodes the specified SearchAllResourcesRequest message. Does not implicitly {@link google.cloud.asset.v1.SearchAllResourcesRequest.verify|verify} messages.
                     * @param message SearchAllResourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.ISearchAllResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchAllResourcesRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1.SearchAllResourcesRequest.verify|verify} messages.
                     * @param message SearchAllResourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.ISearchAllResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchAllResourcesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchAllResourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.SearchAllResourcesRequest;

                    /**
                     * Decodes a SearchAllResourcesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchAllResourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.SearchAllResourcesRequest;

                    /**
                     * Verifies a SearchAllResourcesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchAllResourcesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchAllResourcesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.SearchAllResourcesRequest;

                    /**
                     * Creates a plain object from a SearchAllResourcesRequest message. Also converts values to other types if specified.
                     * @param message SearchAllResourcesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.SearchAllResourcesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchAllResourcesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchAllResourcesResponse. */
                interface ISearchAllResourcesResponse {

                    /** SearchAllResourcesResponse results */
                    results?: (google.cloud.asset.v1.IResourceSearchResult[]|null);

                    /** SearchAllResourcesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a SearchAllResourcesResponse. */
                class SearchAllResourcesResponse implements ISearchAllResourcesResponse {

                    /**
                     * Constructs a new SearchAllResourcesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.ISearchAllResourcesResponse);

                    /** SearchAllResourcesResponse results. */
                    public results: google.cloud.asset.v1.IResourceSearchResult[];

                    /** SearchAllResourcesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new SearchAllResourcesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchAllResourcesResponse instance
                     */
                    public static create(properties?: google.cloud.asset.v1.ISearchAllResourcesResponse): google.cloud.asset.v1.SearchAllResourcesResponse;

                    /**
                     * Encodes the specified SearchAllResourcesResponse message. Does not implicitly {@link google.cloud.asset.v1.SearchAllResourcesResponse.verify|verify} messages.
                     * @param message SearchAllResourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.ISearchAllResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchAllResourcesResponse message, length delimited. Does not implicitly {@link google.cloud.asset.v1.SearchAllResourcesResponse.verify|verify} messages.
                     * @param message SearchAllResourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.ISearchAllResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchAllResourcesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchAllResourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.SearchAllResourcesResponse;

                    /**
                     * Decodes a SearchAllResourcesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchAllResourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.SearchAllResourcesResponse;

                    /**
                     * Verifies a SearchAllResourcesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchAllResourcesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchAllResourcesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.SearchAllResourcesResponse;

                    /**
                     * Creates a plain object from a SearchAllResourcesResponse message. Also converts values to other types if specified.
                     * @param message SearchAllResourcesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.SearchAllResourcesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchAllResourcesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchAllIamPoliciesRequest. */
                interface ISearchAllIamPoliciesRequest {

                    /** SearchAllIamPoliciesRequest scope */
                    scope?: (string|null);

                    /** SearchAllIamPoliciesRequest query */
                    query?: (string|null);

                    /** SearchAllIamPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchAllIamPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a SearchAllIamPoliciesRequest. */
                class SearchAllIamPoliciesRequest implements ISearchAllIamPoliciesRequest {

                    /**
                     * Constructs a new SearchAllIamPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.ISearchAllIamPoliciesRequest);

                    /** SearchAllIamPoliciesRequest scope. */
                    public scope: string;

                    /** SearchAllIamPoliciesRequest query. */
                    public query: string;

                    /** SearchAllIamPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** SearchAllIamPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new SearchAllIamPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchAllIamPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1.ISearchAllIamPoliciesRequest): google.cloud.asset.v1.SearchAllIamPoliciesRequest;

                    /**
                     * Encodes the specified SearchAllIamPoliciesRequest message. Does not implicitly {@link google.cloud.asset.v1.SearchAllIamPoliciesRequest.verify|verify} messages.
                     * @param message SearchAllIamPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.ISearchAllIamPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchAllIamPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1.SearchAllIamPoliciesRequest.verify|verify} messages.
                     * @param message SearchAllIamPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.ISearchAllIamPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchAllIamPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchAllIamPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.SearchAllIamPoliciesRequest;

                    /**
                     * Decodes a SearchAllIamPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchAllIamPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.SearchAllIamPoliciesRequest;

                    /**
                     * Verifies a SearchAllIamPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchAllIamPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchAllIamPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.SearchAllIamPoliciesRequest;

                    /**
                     * Creates a plain object from a SearchAllIamPoliciesRequest message. Also converts values to other types if specified.
                     * @param message SearchAllIamPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.SearchAllIamPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchAllIamPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchAllIamPoliciesResponse. */
                interface ISearchAllIamPoliciesResponse {

                    /** SearchAllIamPoliciesResponse results */
                    results?: (google.cloud.asset.v1.IIamPolicySearchResult[]|null);

                    /** SearchAllIamPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a SearchAllIamPoliciesResponse. */
                class SearchAllIamPoliciesResponse implements ISearchAllIamPoliciesResponse {

                    /**
                     * Constructs a new SearchAllIamPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.ISearchAllIamPoliciesResponse);

                    /** SearchAllIamPoliciesResponse results. */
                    public results: google.cloud.asset.v1.IIamPolicySearchResult[];

                    /** SearchAllIamPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new SearchAllIamPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchAllIamPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.asset.v1.ISearchAllIamPoliciesResponse): google.cloud.asset.v1.SearchAllIamPoliciesResponse;

                    /**
                     * Encodes the specified SearchAllIamPoliciesResponse message. Does not implicitly {@link google.cloud.asset.v1.SearchAllIamPoliciesResponse.verify|verify} messages.
                     * @param message SearchAllIamPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.ISearchAllIamPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchAllIamPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.asset.v1.SearchAllIamPoliciesResponse.verify|verify} messages.
                     * @param message SearchAllIamPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.ISearchAllIamPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchAllIamPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchAllIamPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.SearchAllIamPoliciesResponse;

                    /**
                     * Decodes a SearchAllIamPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchAllIamPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.SearchAllIamPoliciesResponse;

                    /**
                     * Verifies a SearchAllIamPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchAllIamPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchAllIamPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.SearchAllIamPoliciesResponse;

                    /**
                     * Creates a plain object from a SearchAllIamPoliciesResponse message. Also converts values to other types if specified.
                     * @param message SearchAllIamPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.SearchAllIamPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchAllIamPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** ContentType enum. */
                enum ContentType {
                    CONTENT_TYPE_UNSPECIFIED = 0,
                    RESOURCE = 1,
                    IAM_POLICY = 2,
                    ORG_POLICY = 4,
                    ACCESS_POLICY = 5
                }

                /** Properties of a TemporalAsset. */
                interface ITemporalAsset {

                    /** TemporalAsset window */
                    window?: (google.cloud.asset.v1.ITimeWindow|null);

                    /** TemporalAsset deleted */
                    deleted?: (boolean|null);

                    /** TemporalAsset asset */
                    asset?: (google.cloud.asset.v1.IAsset|null);

                    /** TemporalAsset priorAssetState */
                    priorAssetState?: (google.cloud.asset.v1.TemporalAsset.PriorAssetState|keyof typeof google.cloud.asset.v1.TemporalAsset.PriorAssetState|null);

                    /** TemporalAsset priorAsset */
                    priorAsset?: (google.cloud.asset.v1.IAsset|null);
                }

                /** Represents a TemporalAsset. */
                class TemporalAsset implements ITemporalAsset {

                    /**
                     * Constructs a new TemporalAsset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.ITemporalAsset);

                    /** TemporalAsset window. */
                    public window?: (google.cloud.asset.v1.ITimeWindow|null);

                    /** TemporalAsset deleted. */
                    public deleted: boolean;

                    /** TemporalAsset asset. */
                    public asset?: (google.cloud.asset.v1.IAsset|null);

                    /** TemporalAsset priorAssetState. */
                    public priorAssetState: (google.cloud.asset.v1.TemporalAsset.PriorAssetState|keyof typeof google.cloud.asset.v1.TemporalAsset.PriorAssetState);

                    /** TemporalAsset priorAsset. */
                    public priorAsset?: (google.cloud.asset.v1.IAsset|null);

                    /**
                     * Creates a new TemporalAsset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TemporalAsset instance
                     */
                    public static create(properties?: google.cloud.asset.v1.ITemporalAsset): google.cloud.asset.v1.TemporalAsset;

                    /**
                     * Encodes the specified TemporalAsset message. Does not implicitly {@link google.cloud.asset.v1.TemporalAsset.verify|verify} messages.
                     * @param message TemporalAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.ITemporalAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TemporalAsset message, length delimited. Does not implicitly {@link google.cloud.asset.v1.TemporalAsset.verify|verify} messages.
                     * @param message TemporalAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.ITemporalAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TemporalAsset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TemporalAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.TemporalAsset;

                    /**
                     * Decodes a TemporalAsset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TemporalAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.TemporalAsset;

                    /**
                     * Verifies a TemporalAsset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TemporalAsset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TemporalAsset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.TemporalAsset;

                    /**
                     * Creates a plain object from a TemporalAsset message. Also converts values to other types if specified.
                     * @param message TemporalAsset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.TemporalAsset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TemporalAsset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace TemporalAsset {

                    /** PriorAssetState enum. */
                    enum PriorAssetState {
                        PRIOR_ASSET_STATE_UNSPECIFIED = 0,
                        PRESENT = 1,
                        INVALID = 2,
                        DOES_NOT_EXIST = 3,
                        DELETED = 4
                    }
                }

                /** Properties of a TimeWindow. */
                interface ITimeWindow {

                    /** TimeWindow startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TimeWindow. */
                class TimeWindow implements ITimeWindow {

                    /**
                     * Constructs a new TimeWindow.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.ITimeWindow);

                    /** TimeWindow startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TimeWindow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeWindow instance
                     */
                    public static create(properties?: google.cloud.asset.v1.ITimeWindow): google.cloud.asset.v1.TimeWindow;

                    /**
                     * Encodes the specified TimeWindow message. Does not implicitly {@link google.cloud.asset.v1.TimeWindow.verify|verify} messages.
                     * @param message TimeWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.ITimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimeWindow message, length delimited. Does not implicitly {@link google.cloud.asset.v1.TimeWindow.verify|verify} messages.
                     * @param message TimeWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.ITimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimeWindow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.TimeWindow;

                    /**
                     * Decodes a TimeWindow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.TimeWindow;

                    /**
                     * Verifies a TimeWindow message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeWindow message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeWindow
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.TimeWindow;

                    /**
                     * Creates a plain object from a TimeWindow message. Also converts values to other types if specified.
                     * @param message TimeWindow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.TimeWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeWindow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Asset. */
                interface IAsset {

                    /** Asset updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Asset name */
                    name?: (string|null);

                    /** Asset assetType */
                    assetType?: (string|null);

                    /** Asset resource */
                    resource?: (google.cloud.asset.v1.IResource|null);

                    /** Asset iamPolicy */
                    iamPolicy?: (google.iam.v1.IPolicy|null);

                    /** Asset orgPolicy */
                    orgPolicy?: (google.cloud.orgpolicy.v1.IPolicy[]|null);

                    /** Asset accessPolicy */
                    accessPolicy?: (google.identity.accesscontextmanager.v1.IAccessPolicy|null);

                    /** Asset accessLevel */
                    accessLevel?: (google.identity.accesscontextmanager.v1.IAccessLevel|null);

                    /** Asset servicePerimeter */
                    servicePerimeter?: (google.identity.accesscontextmanager.v1.IServicePerimeter|null);

                    /** Asset ancestors */
                    ancestors?: (string[]|null);
                }

                /** Represents an Asset. */
                class Asset implements IAsset {

                    /**
                     * Constructs a new Asset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IAsset);

                    /** Asset updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Asset name. */
                    public name: string;

                    /** Asset assetType. */
                    public assetType: string;

                    /** Asset resource. */
                    public resource?: (google.cloud.asset.v1.IResource|null);

                    /** Asset iamPolicy. */
                    public iamPolicy?: (google.iam.v1.IPolicy|null);

                    /** Asset orgPolicy. */
                    public orgPolicy: google.cloud.orgpolicy.v1.IPolicy[];

                    /** Asset accessPolicy. */
                    public accessPolicy?: (google.identity.accesscontextmanager.v1.IAccessPolicy|null);

                    /** Asset accessLevel. */
                    public accessLevel?: (google.identity.accesscontextmanager.v1.IAccessLevel|null);

                    /** Asset servicePerimeter. */
                    public servicePerimeter?: (google.identity.accesscontextmanager.v1.IServicePerimeter|null);

                    /** Asset ancestors. */
                    public ancestors: string[];

                    /** Asset accessContextPolicy. */
                    public accessContextPolicy?: ("accessPolicy"|"accessLevel"|"servicePerimeter");

                    /**
                     * Creates a new Asset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Asset instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IAsset): google.cloud.asset.v1.Asset;

                    /**
                     * Encodes the specified Asset message. Does not implicitly {@link google.cloud.asset.v1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Asset message, length delimited. Does not implicitly {@link google.cloud.asset.v1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Asset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.Asset;

                    /**
                     * Decodes an Asset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.Asset;

                    /**
                     * Verifies an Asset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Asset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Asset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.Asset;

                    /**
                     * Creates a plain object from an Asset message. Also converts values to other types if specified.
                     * @param message Asset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.Asset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Asset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Resource. */
                interface IResource {

                    /** Resource version */
                    version?: (string|null);

                    /** Resource discoveryDocumentUri */
                    discoveryDocumentUri?: (string|null);

                    /** Resource discoveryName */
                    discoveryName?: (string|null);

                    /** Resource resourceUrl */
                    resourceUrl?: (string|null);

                    /** Resource parent */
                    parent?: (string|null);

                    /** Resource data */
                    data?: (google.protobuf.IStruct|null);

                    /** Resource location */
                    location?: (string|null);
                }

                /** Represents a Resource. */
                class Resource implements IResource {

                    /**
                     * Constructs a new Resource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IResource);

                    /** Resource version. */
                    public version: string;

                    /** Resource discoveryDocumentUri. */
                    public discoveryDocumentUri: string;

                    /** Resource discoveryName. */
                    public discoveryName: string;

                    /** Resource resourceUrl. */
                    public resourceUrl: string;

                    /** Resource parent. */
                    public parent: string;

                    /** Resource data. */
                    public data?: (google.protobuf.IStruct|null);

                    /** Resource location. */
                    public location: string;

                    /**
                     * Creates a new Resource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Resource instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IResource): google.cloud.asset.v1.Resource;

                    /**
                     * Encodes the specified Resource message. Does not implicitly {@link google.cloud.asset.v1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Resource message, length delimited. Does not implicitly {@link google.cloud.asset.v1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Resource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.Resource;

                    /**
                     * Decodes a Resource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.Resource;

                    /**
                     * Verifies a Resource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Resource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Resource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.Resource;

                    /**
                     * Creates a plain object from a Resource message. Also converts values to other types if specified.
                     * @param message Resource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Resource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ResourceSearchResult. */
                interface IResourceSearchResult {

                    /** ResourceSearchResult name */
                    name?: (string|null);

                    /** ResourceSearchResult assetType */
                    assetType?: (string|null);

                    /** ResourceSearchResult project */
                    project?: (string|null);

                    /** ResourceSearchResult displayName */
                    displayName?: (string|null);

                    /** ResourceSearchResult description */
                    description?: (string|null);

                    /** ResourceSearchResult location */
                    location?: (string|null);

                    /** ResourceSearchResult labels */
                    labels?: ({ [k: string]: string }|null);

                    /** ResourceSearchResult networkTags */
                    networkTags?: (string[]|null);

                    /** ResourceSearchResult additionalAttributes */
                    additionalAttributes?: (google.protobuf.IStruct|null);
                }

                /** Represents a ResourceSearchResult. */
                class ResourceSearchResult implements IResourceSearchResult {

                    /**
                     * Constructs a new ResourceSearchResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IResourceSearchResult);

                    /** ResourceSearchResult name. */
                    public name: string;

                    /** ResourceSearchResult assetType. */
                    public assetType: string;

                    /** ResourceSearchResult project. */
                    public project: string;

                    /** ResourceSearchResult displayName. */
                    public displayName: string;

                    /** ResourceSearchResult description. */
                    public description: string;

                    /** ResourceSearchResult location. */
                    public location: string;

                    /** ResourceSearchResult labels. */
                    public labels: { [k: string]: string };

                    /** ResourceSearchResult networkTags. */
                    public networkTags: string[];

                    /** ResourceSearchResult additionalAttributes. */
                    public additionalAttributes?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new ResourceSearchResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ResourceSearchResult instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IResourceSearchResult): google.cloud.asset.v1.ResourceSearchResult;

                    /**
                     * Encodes the specified ResourceSearchResult message. Does not implicitly {@link google.cloud.asset.v1.ResourceSearchResult.verify|verify} messages.
                     * @param message ResourceSearchResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IResourceSearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ResourceSearchResult message, length delimited. Does not implicitly {@link google.cloud.asset.v1.ResourceSearchResult.verify|verify} messages.
                     * @param message ResourceSearchResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IResourceSearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ResourceSearchResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ResourceSearchResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.ResourceSearchResult;

                    /**
                     * Decodes a ResourceSearchResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ResourceSearchResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.ResourceSearchResult;

                    /**
                     * Verifies a ResourceSearchResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ResourceSearchResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ResourceSearchResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.ResourceSearchResult;

                    /**
                     * Creates a plain object from a ResourceSearchResult message. Also converts values to other types if specified.
                     * @param message ResourceSearchResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.ResourceSearchResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ResourceSearchResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IamPolicySearchResult. */
                interface IIamPolicySearchResult {

                    /** IamPolicySearchResult resource */
                    resource?: (string|null);

                    /** IamPolicySearchResult project */
                    project?: (string|null);

                    /** IamPolicySearchResult policy */
                    policy?: (google.iam.v1.IPolicy|null);

                    /** IamPolicySearchResult explanation */
                    explanation?: (google.cloud.asset.v1.IamPolicySearchResult.IExplanation|null);
                }

                /** Represents an IamPolicySearchResult. */
                class IamPolicySearchResult implements IIamPolicySearchResult {

                    /**
                     * Constructs a new IamPolicySearchResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1.IIamPolicySearchResult);

                    /** IamPolicySearchResult resource. */
                    public resource: string;

                    /** IamPolicySearchResult project. */
                    public project: string;

                    /** IamPolicySearchResult policy. */
                    public policy?: (google.iam.v1.IPolicy|null);

                    /** IamPolicySearchResult explanation. */
                    public explanation?: (google.cloud.asset.v1.IamPolicySearchResult.IExplanation|null);

                    /**
                     * Creates a new IamPolicySearchResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IamPolicySearchResult instance
                     */
                    public static create(properties?: google.cloud.asset.v1.IIamPolicySearchResult): google.cloud.asset.v1.IamPolicySearchResult;

                    /**
                     * Encodes the specified IamPolicySearchResult message. Does not implicitly {@link google.cloud.asset.v1.IamPolicySearchResult.verify|verify} messages.
                     * @param message IamPolicySearchResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1.IIamPolicySearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IamPolicySearchResult message, length delimited. Does not implicitly {@link google.cloud.asset.v1.IamPolicySearchResult.verify|verify} messages.
                     * @param message IamPolicySearchResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1.IIamPolicySearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IamPolicySearchResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IamPolicySearchResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.IamPolicySearchResult;

                    /**
                     * Decodes an IamPolicySearchResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IamPolicySearchResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.IamPolicySearchResult;

                    /**
                     * Verifies an IamPolicySearchResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IamPolicySearchResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IamPolicySearchResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.IamPolicySearchResult;

                    /**
                     * Creates a plain object from an IamPolicySearchResult message. Also converts values to other types if specified.
                     * @param message IamPolicySearchResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1.IamPolicySearchResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IamPolicySearchResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace IamPolicySearchResult {

                    /** Properties of an Explanation. */
                    interface IExplanation {

                        /** Explanation matchedPermissions */
                        matchedPermissions?: ({ [k: string]: google.cloud.asset.v1.IamPolicySearchResult.Explanation.IPermissions }|null);
                    }

                    /** Represents an Explanation. */
                    class Explanation implements IExplanation {

                        /**
                         * Constructs a new Explanation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1.IamPolicySearchResult.IExplanation);

                        /** Explanation matchedPermissions. */
                        public matchedPermissions: { [k: string]: google.cloud.asset.v1.IamPolicySearchResult.Explanation.IPermissions };

                        /**
                         * Creates a new Explanation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Explanation instance
                         */
                        public static create(properties?: google.cloud.asset.v1.IamPolicySearchResult.IExplanation): google.cloud.asset.v1.IamPolicySearchResult.Explanation;

                        /**
                         * Encodes the specified Explanation message. Does not implicitly {@link google.cloud.asset.v1.IamPolicySearchResult.Explanation.verify|verify} messages.
                         * @param message Explanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1.IamPolicySearchResult.IExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Explanation message, length delimited. Does not implicitly {@link google.cloud.asset.v1.IamPolicySearchResult.Explanation.verify|verify} messages.
                         * @param message Explanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1.IamPolicySearchResult.IExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Explanation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Explanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.IamPolicySearchResult.Explanation;

                        /**
                         * Decodes an Explanation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Explanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.IamPolicySearchResult.Explanation;

                        /**
                         * Verifies an Explanation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Explanation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Explanation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.IamPolicySearchResult.Explanation;

                        /**
                         * Creates a plain object from an Explanation message. Also converts values to other types if specified.
                         * @param message Explanation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1.IamPolicySearchResult.Explanation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Explanation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace Explanation {

                        /** Properties of a Permissions. */
                        interface IPermissions {

                            /** Permissions permissions */
                            permissions?: (string[]|null);
                        }

                        /** Represents a Permissions. */
                        class Permissions implements IPermissions {

                            /**
                             * Constructs a new Permissions.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.asset.v1.IamPolicySearchResult.Explanation.IPermissions);

                            /** Permissions permissions. */
                            public permissions: string[];

                            /**
                             * Creates a new Permissions instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Permissions instance
                             */
                            public static create(properties?: google.cloud.asset.v1.IamPolicySearchResult.Explanation.IPermissions): google.cloud.asset.v1.IamPolicySearchResult.Explanation.Permissions;

                            /**
                             * Encodes the specified Permissions message. Does not implicitly {@link google.cloud.asset.v1.IamPolicySearchResult.Explanation.Permissions.verify|verify} messages.
                             * @param message Permissions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.asset.v1.IamPolicySearchResult.Explanation.IPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Permissions message, length delimited. Does not implicitly {@link google.cloud.asset.v1.IamPolicySearchResult.Explanation.Permissions.verify|verify} messages.
                             * @param message Permissions message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.asset.v1.IamPolicySearchResult.Explanation.IPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Permissions message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Permissions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1.IamPolicySearchResult.Explanation.Permissions;

                            /**
                             * Decodes a Permissions message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Permissions
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1.IamPolicySearchResult.Explanation.Permissions;

                            /**
                             * Verifies a Permissions message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Permissions message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Permissions
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1.IamPolicySearchResult.Explanation.Permissions;

                            /**
                             * Creates a plain object from a Permissions message. Also converts values to other types if specified.
                             * @param message Permissions
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.asset.v1.IamPolicySearchResult.Explanation.Permissions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Permissions to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };
                        }
                    }
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Represents an AssetService */
                class AssetService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AssetService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AssetService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AssetService;

                    /**
                     * Calls ExportAssets.
                     * @param request ExportAssetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportAssets(request: google.cloud.asset.v1beta1.IExportAssetsRequest, callback: google.cloud.asset.v1beta1.AssetService.ExportAssetsCallback): void;

                    /**
                     * Calls ExportAssets.
                     * @param request ExportAssetsRequest message or plain object
                     * @returns Promise
                     */
                    public exportAssets(request: google.cloud.asset.v1beta1.IExportAssetsRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls BatchGetAssetsHistory.
                     * @param request BatchGetAssetsHistoryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and BatchGetAssetsHistoryResponse
                     */
                    public batchGetAssetsHistory(request: google.cloud.asset.v1beta1.IBatchGetAssetsHistoryRequest, callback: google.cloud.asset.v1beta1.AssetService.BatchGetAssetsHistoryCallback): void;

                    /**
                     * Calls BatchGetAssetsHistory.
                     * @param request BatchGetAssetsHistoryRequest message or plain object
                     * @returns Promise
                     */
                    public batchGetAssetsHistory(request: google.cloud.asset.v1beta1.IBatchGetAssetsHistoryRequest): Promise<google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse>;
                }

                namespace AssetService {

                    /**
                     * Callback as used by {@link google.cloud.asset.v1beta1.AssetService#exportAssets}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportAssetsCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1beta1.AssetService#batchGetAssetsHistory}.
                     * @param error Error, if any
                     * @param [response] BatchGetAssetsHistoryResponse
                     */
                    type BatchGetAssetsHistoryCallback = (error: (Error|null), response?: google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse) => void;
                }

                /** Properties of an ExportAssetsRequest. */
                interface IExportAssetsRequest {

                    /** ExportAssetsRequest parent */
                    parent?: (string|null);

                    /** ExportAssetsRequest readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ExportAssetsRequest assetTypes */
                    assetTypes?: (string[]|null);

                    /** ExportAssetsRequest contentType */
                    contentType?: (google.cloud.asset.v1beta1.ContentType|keyof typeof google.cloud.asset.v1beta1.ContentType|null);

                    /** ExportAssetsRequest outputConfig */
                    outputConfig?: (google.cloud.asset.v1beta1.IOutputConfig|null);
                }

                /** Represents an ExportAssetsRequest. */
                class ExportAssetsRequest implements IExportAssetsRequest {

                    /**
                     * Constructs a new ExportAssetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1beta1.IExportAssetsRequest);

                    /** ExportAssetsRequest parent. */
                    public parent: string;

                    /** ExportAssetsRequest readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ExportAssetsRequest assetTypes. */
                    public assetTypes: string[];

                    /** ExportAssetsRequest contentType. */
                    public contentType: (google.cloud.asset.v1beta1.ContentType|keyof typeof google.cloud.asset.v1beta1.ContentType);

                    /** ExportAssetsRequest outputConfig. */
                    public outputConfig?: (google.cloud.asset.v1beta1.IOutputConfig|null);

                    /**
                     * Creates a new ExportAssetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportAssetsRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1beta1.IExportAssetsRequest): google.cloud.asset.v1beta1.ExportAssetsRequest;

                    /**
                     * Encodes the specified ExportAssetsRequest message. Does not implicitly {@link google.cloud.asset.v1beta1.ExportAssetsRequest.verify|verify} messages.
                     * @param message ExportAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1beta1.IExportAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportAssetsRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1beta1.ExportAssetsRequest.verify|verify} messages.
                     * @param message ExportAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1beta1.IExportAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportAssetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1beta1.ExportAssetsRequest;

                    /**
                     * Decodes an ExportAssetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1beta1.ExportAssetsRequest;

                    /**
                     * Verifies an ExportAssetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportAssetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportAssetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1beta1.ExportAssetsRequest;

                    /**
                     * Creates a plain object from an ExportAssetsRequest message. Also converts values to other types if specified.
                     * @param message ExportAssetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1beta1.ExportAssetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportAssetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an ExportAssetsResponse. */
                interface IExportAssetsResponse {

                    /** ExportAssetsResponse readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ExportAssetsResponse outputConfig */
                    outputConfig?: (google.cloud.asset.v1beta1.IOutputConfig|null);
                }

                /** Represents an ExportAssetsResponse. */
                class ExportAssetsResponse implements IExportAssetsResponse {

                    /**
                     * Constructs a new ExportAssetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1beta1.IExportAssetsResponse);

                    /** ExportAssetsResponse readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ExportAssetsResponse outputConfig. */
                    public outputConfig?: (google.cloud.asset.v1beta1.IOutputConfig|null);

                    /**
                     * Creates a new ExportAssetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportAssetsResponse instance
                     */
                    public static create(properties?: google.cloud.asset.v1beta1.IExportAssetsResponse): google.cloud.asset.v1beta1.ExportAssetsResponse;

                    /**
                     * Encodes the specified ExportAssetsResponse message. Does not implicitly {@link google.cloud.asset.v1beta1.ExportAssetsResponse.verify|verify} messages.
                     * @param message ExportAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1beta1.IExportAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportAssetsResponse message, length delimited. Does not implicitly {@link google.cloud.asset.v1beta1.ExportAssetsResponse.verify|verify} messages.
                     * @param message ExportAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1beta1.IExportAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportAssetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1beta1.ExportAssetsResponse;

                    /**
                     * Decodes an ExportAssetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1beta1.ExportAssetsResponse;

                    /**
                     * Verifies an ExportAssetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportAssetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportAssetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1beta1.ExportAssetsResponse;

                    /**
                     * Creates a plain object from an ExportAssetsResponse message. Also converts values to other types if specified.
                     * @param message ExportAssetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1beta1.ExportAssetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportAssetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchGetAssetsHistoryRequest. */
                interface IBatchGetAssetsHistoryRequest {

                    /** BatchGetAssetsHistoryRequest parent */
                    parent?: (string|null);

                    /** BatchGetAssetsHistoryRequest assetNames */
                    assetNames?: (string[]|null);

                    /** BatchGetAssetsHistoryRequest contentType */
                    contentType?: (google.cloud.asset.v1beta1.ContentType|keyof typeof google.cloud.asset.v1beta1.ContentType|null);

                    /** BatchGetAssetsHistoryRequest readTimeWindow */
                    readTimeWindow?: (google.cloud.asset.v1beta1.ITimeWindow|null);
                }

                /** Represents a BatchGetAssetsHistoryRequest. */
                class BatchGetAssetsHistoryRequest implements IBatchGetAssetsHistoryRequest {

                    /**
                     * Constructs a new BatchGetAssetsHistoryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1beta1.IBatchGetAssetsHistoryRequest);

                    /** BatchGetAssetsHistoryRequest parent. */
                    public parent: string;

                    /** BatchGetAssetsHistoryRequest assetNames. */
                    public assetNames: string[];

                    /** BatchGetAssetsHistoryRequest contentType. */
                    public contentType: (google.cloud.asset.v1beta1.ContentType|keyof typeof google.cloud.asset.v1beta1.ContentType);

                    /** BatchGetAssetsHistoryRequest readTimeWindow. */
                    public readTimeWindow?: (google.cloud.asset.v1beta1.ITimeWindow|null);

                    /**
                     * Creates a new BatchGetAssetsHistoryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchGetAssetsHistoryRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1beta1.IBatchGetAssetsHistoryRequest): google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest;

                    /**
                     * Encodes the specified BatchGetAssetsHistoryRequest message. Does not implicitly {@link google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest.verify|verify} messages.
                     * @param message BatchGetAssetsHistoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1beta1.IBatchGetAssetsHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchGetAssetsHistoryRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest.verify|verify} messages.
                     * @param message BatchGetAssetsHistoryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1beta1.IBatchGetAssetsHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchGetAssetsHistoryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchGetAssetsHistoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest;

                    /**
                     * Decodes a BatchGetAssetsHistoryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchGetAssetsHistoryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest;

                    /**
                     * Verifies a BatchGetAssetsHistoryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchGetAssetsHistoryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchGetAssetsHistoryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest;

                    /**
                     * Creates a plain object from a BatchGetAssetsHistoryRequest message. Also converts values to other types if specified.
                     * @param message BatchGetAssetsHistoryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1beta1.BatchGetAssetsHistoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchGetAssetsHistoryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BatchGetAssetsHistoryResponse. */
                interface IBatchGetAssetsHistoryResponse {

                    /** BatchGetAssetsHistoryResponse assets */
                    assets?: (google.cloud.asset.v1beta1.ITemporalAsset[]|null);
                }

                /** Represents a BatchGetAssetsHistoryResponse. */
                class BatchGetAssetsHistoryResponse implements IBatchGetAssetsHistoryResponse {

                    /**
                     * Constructs a new BatchGetAssetsHistoryResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1beta1.IBatchGetAssetsHistoryResponse);

                    /** BatchGetAssetsHistoryResponse assets. */
                    public assets: google.cloud.asset.v1beta1.ITemporalAsset[];

                    /**
                     * Creates a new BatchGetAssetsHistoryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BatchGetAssetsHistoryResponse instance
                     */
                    public static create(properties?: google.cloud.asset.v1beta1.IBatchGetAssetsHistoryResponse): google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse;

                    /**
                     * Encodes the specified BatchGetAssetsHistoryResponse message. Does not implicitly {@link google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse.verify|verify} messages.
                     * @param message BatchGetAssetsHistoryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1beta1.IBatchGetAssetsHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BatchGetAssetsHistoryResponse message, length delimited. Does not implicitly {@link google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse.verify|verify} messages.
                     * @param message BatchGetAssetsHistoryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1beta1.IBatchGetAssetsHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BatchGetAssetsHistoryResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BatchGetAssetsHistoryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse;

                    /**
                     * Decodes a BatchGetAssetsHistoryResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BatchGetAssetsHistoryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse;

                    /**
                     * Verifies a BatchGetAssetsHistoryResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BatchGetAssetsHistoryResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BatchGetAssetsHistoryResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse;

                    /**
                     * Creates a plain object from a BatchGetAssetsHistoryResponse message. Also converts values to other types if specified.
                     * @param message BatchGetAssetsHistoryResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1beta1.BatchGetAssetsHistoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BatchGetAssetsHistoryResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OutputConfig. */
                interface IOutputConfig {

                    /** OutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.asset.v1beta1.IGcsDestination|null);
                }

                /** Represents an OutputConfig. */
                class OutputConfig implements IOutputConfig {

                    /**
                     * Constructs a new OutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1beta1.IOutputConfig);

                    /** OutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.asset.v1beta1.IGcsDestination|null);

                    /** OutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new OutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputConfig instance
                     */
                    public static create(properties?: google.cloud.asset.v1beta1.IOutputConfig): google.cloud.asset.v1beta1.OutputConfig;

                    /**
                     * Encodes the specified OutputConfig message. Does not implicitly {@link google.cloud.asset.v1beta1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1beta1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutputConfig message, length delimited. Does not implicitly {@link google.cloud.asset.v1beta1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1beta1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1beta1.OutputConfig;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1beta1.OutputConfig;

                    /**
                     * Verifies an OutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1beta1.OutputConfig;

                    /**
                     * Creates a plain object from an OutputConfig message. Also converts values to other types if specified.
                     * @param message OutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1beta1.OutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsDestination. */
                interface IGcsDestination {

                    /** GcsDestination uri */
                    uri?: (string|null);

                    /** GcsDestination uriPrefix */
                    uriPrefix?: (string|null);
                }

                /** Represents a GcsDestination. */
                class GcsDestination implements IGcsDestination {

                    /**
                     * Constructs a new GcsDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1beta1.IGcsDestination);

                    /** GcsDestination uri. */
                    public uri: string;

                    /** GcsDestination uriPrefix. */
                    public uriPrefix: string;

                    /** GcsDestination objectUri. */
                    public objectUri?: ("uri"|"uriPrefix");

                    /**
                     * Creates a new GcsDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDestination instance
                     */
                    public static create(properties?: google.cloud.asset.v1beta1.IGcsDestination): google.cloud.asset.v1beta1.GcsDestination;

                    /**
                     * Encodes the specified GcsDestination message. Does not implicitly {@link google.cloud.asset.v1beta1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1beta1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsDestination message, length delimited. Does not implicitly {@link google.cloud.asset.v1beta1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1beta1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1beta1.GcsDestination;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1beta1.GcsDestination;

                    /**
                     * Verifies a GcsDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1beta1.GcsDestination;

                    /**
                     * Creates a plain object from a GcsDestination message. Also converts values to other types if specified.
                     * @param message GcsDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1beta1.GcsDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** ContentType enum. */
                enum ContentType {
                    CONTENT_TYPE_UNSPECIFIED = 0,
                    RESOURCE = 1,
                    IAM_POLICY = 2
                }

                /** Properties of a TemporalAsset. */
                interface ITemporalAsset {

                    /** TemporalAsset window */
                    window?: (google.cloud.asset.v1beta1.ITimeWindow|null);

                    /** TemporalAsset deleted */
                    deleted?: (boolean|null);

                    /** TemporalAsset asset */
                    asset?: (google.cloud.asset.v1beta1.IAsset|null);
                }

                /** Represents a TemporalAsset. */
                class TemporalAsset implements ITemporalAsset {

                    /**
                     * Constructs a new TemporalAsset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1beta1.ITemporalAsset);

                    /** TemporalAsset window. */
                    public window?: (google.cloud.asset.v1beta1.ITimeWindow|null);

                    /** TemporalAsset deleted. */
                    public deleted: boolean;

                    /** TemporalAsset asset. */
                    public asset?: (google.cloud.asset.v1beta1.IAsset|null);

                    /**
                     * Creates a new TemporalAsset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TemporalAsset instance
                     */
                    public static create(properties?: google.cloud.asset.v1beta1.ITemporalAsset): google.cloud.asset.v1beta1.TemporalAsset;

                    /**
                     * Encodes the specified TemporalAsset message. Does not implicitly {@link google.cloud.asset.v1beta1.TemporalAsset.verify|verify} messages.
                     * @param message TemporalAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1beta1.ITemporalAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TemporalAsset message, length delimited. Does not implicitly {@link google.cloud.asset.v1beta1.TemporalAsset.verify|verify} messages.
                     * @param message TemporalAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1beta1.ITemporalAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TemporalAsset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TemporalAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1beta1.TemporalAsset;

                    /**
                     * Decodes a TemporalAsset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TemporalAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1beta1.TemporalAsset;

                    /**
                     * Verifies a TemporalAsset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TemporalAsset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TemporalAsset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1beta1.TemporalAsset;

                    /**
                     * Creates a plain object from a TemporalAsset message. Also converts values to other types if specified.
                     * @param message TemporalAsset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1beta1.TemporalAsset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TemporalAsset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TimeWindow. */
                interface ITimeWindow {

                    /** TimeWindow startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TimeWindow. */
                class TimeWindow implements ITimeWindow {

                    /**
                     * Constructs a new TimeWindow.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1beta1.ITimeWindow);

                    /** TimeWindow startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TimeWindow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeWindow instance
                     */
                    public static create(properties?: google.cloud.asset.v1beta1.ITimeWindow): google.cloud.asset.v1beta1.TimeWindow;

                    /**
                     * Encodes the specified TimeWindow message. Does not implicitly {@link google.cloud.asset.v1beta1.TimeWindow.verify|verify} messages.
                     * @param message TimeWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1beta1.ITimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimeWindow message, length delimited. Does not implicitly {@link google.cloud.asset.v1beta1.TimeWindow.verify|verify} messages.
                     * @param message TimeWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1beta1.ITimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimeWindow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1beta1.TimeWindow;

                    /**
                     * Decodes a TimeWindow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1beta1.TimeWindow;

                    /**
                     * Verifies a TimeWindow message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeWindow message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeWindow
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1beta1.TimeWindow;

                    /**
                     * Creates a plain object from a TimeWindow message. Also converts values to other types if specified.
                     * @param message TimeWindow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1beta1.TimeWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeWindow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Asset. */
                interface IAsset {

                    /** Asset name */
                    name?: (string|null);

                    /** Asset assetType */
                    assetType?: (string|null);

                    /** Asset resource */
                    resource?: (google.cloud.asset.v1beta1.IResource|null);

                    /** Asset iamPolicy */
                    iamPolicy?: (google.iam.v1.IPolicy|null);
                }

                /** Represents an Asset. */
                class Asset implements IAsset {

                    /**
                     * Constructs a new Asset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1beta1.IAsset);

                    /** Asset name. */
                    public name: string;

                    /** Asset assetType. */
                    public assetType: string;

                    /** Asset resource. */
                    public resource?: (google.cloud.asset.v1beta1.IResource|null);

                    /** Asset iamPolicy. */
                    public iamPolicy?: (google.iam.v1.IPolicy|null);

                    /**
                     * Creates a new Asset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Asset instance
                     */
                    public static create(properties?: google.cloud.asset.v1beta1.IAsset): google.cloud.asset.v1beta1.Asset;

                    /**
                     * Encodes the specified Asset message. Does not implicitly {@link google.cloud.asset.v1beta1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1beta1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Asset message, length delimited. Does not implicitly {@link google.cloud.asset.v1beta1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1beta1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Asset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1beta1.Asset;

                    /**
                     * Decodes an Asset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1beta1.Asset;

                    /**
                     * Verifies an Asset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Asset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Asset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1beta1.Asset;

                    /**
                     * Creates a plain object from an Asset message. Also converts values to other types if specified.
                     * @param message Asset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1beta1.Asset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Asset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Resource. */
                interface IResource {

                    /** Resource version */
                    version?: (string|null);

                    /** Resource discoveryDocumentUri */
                    discoveryDocumentUri?: (string|null);

                    /** Resource discoveryName */
                    discoveryName?: (string|null);

                    /** Resource resourceUrl */
                    resourceUrl?: (string|null);

                    /** Resource parent */
                    parent?: (string|null);

                    /** Resource data */
                    data?: (google.protobuf.IStruct|null);
                }

                /** Represents a Resource. */
                class Resource implements IResource {

                    /**
                     * Constructs a new Resource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1beta1.IResource);

                    /** Resource version. */
                    public version: string;

                    /** Resource discoveryDocumentUri. */
                    public discoveryDocumentUri: string;

                    /** Resource discoveryName. */
                    public discoveryName: string;

                    /** Resource resourceUrl. */
                    public resourceUrl: string;

                    /** Resource parent. */
                    public parent: string;

                    /** Resource data. */
                    public data?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new Resource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Resource instance
                     */
                    public static create(properties?: google.cloud.asset.v1beta1.IResource): google.cloud.asset.v1beta1.Resource;

                    /**
                     * Encodes the specified Resource message. Does not implicitly {@link google.cloud.asset.v1beta1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1beta1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Resource message, length delimited. Does not implicitly {@link google.cloud.asset.v1beta1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1beta1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Resource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1beta1.Resource;

                    /**
                     * Decodes a Resource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1beta1.Resource;

                    /**
                     * Verifies a Resource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Resource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Resource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1beta1.Resource;

                    /**
                     * Creates a plain object from a Resource message. Also converts values to other types if specified.
                     * @param message Resource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1beta1.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Resource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1p1beta1. */
            namespace v1p1beta1 {

                /** Represents an AssetService */
                class AssetService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AssetService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AssetService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AssetService;

                    /**
                     * Calls SearchAllResources.
                     * @param request SearchAllResourcesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchAllResourcesResponse
                     */
                    public searchAllResources(request: google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest, callback: google.cloud.asset.v1p1beta1.AssetService.SearchAllResourcesCallback): void;

                    /**
                     * Calls SearchAllResources.
                     * @param request SearchAllResourcesRequest message or plain object
                     * @returns Promise
                     */
                    public searchAllResources(request: google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest): Promise<google.cloud.asset.v1p1beta1.SearchAllResourcesResponse>;

                    /**
                     * Calls SearchAllIamPolicies.
                     * @param request SearchAllIamPoliciesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SearchAllIamPoliciesResponse
                     */
                    public searchAllIamPolicies(request: google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest, callback: google.cloud.asset.v1p1beta1.AssetService.SearchAllIamPoliciesCallback): void;

                    /**
                     * Calls SearchAllIamPolicies.
                     * @param request SearchAllIamPoliciesRequest message or plain object
                     * @returns Promise
                     */
                    public searchAllIamPolicies(request: google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest): Promise<google.cloud.asset.v1p1beta1.SearchAllIamPoliciesResponse>;
                }

                namespace AssetService {

                    /**
                     * Callback as used by {@link google.cloud.asset.v1p1beta1.AssetService#searchAllResources}.
                     * @param error Error, if any
                     * @param [response] SearchAllResourcesResponse
                     */
                    type SearchAllResourcesCallback = (error: (Error|null), response?: google.cloud.asset.v1p1beta1.SearchAllResourcesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1p1beta1.AssetService#searchAllIamPolicies}.
                     * @param error Error, if any
                     * @param [response] SearchAllIamPoliciesResponse
                     */
                    type SearchAllIamPoliciesCallback = (error: (Error|null), response?: google.cloud.asset.v1p1beta1.SearchAllIamPoliciesResponse) => void;
                }

                /** Properties of a SearchAllResourcesRequest. */
                interface ISearchAllResourcesRequest {

                    /** SearchAllResourcesRequest scope */
                    scope?: (string|null);

                    /** SearchAllResourcesRequest query */
                    query?: (string|null);

                    /** SearchAllResourcesRequest assetTypes */
                    assetTypes?: (string[]|null);

                    /** SearchAllResourcesRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchAllResourcesRequest pageToken */
                    pageToken?: (string|null);

                    /** SearchAllResourcesRequest orderBy */
                    orderBy?: (string|null);
                }

                /** Represents a SearchAllResourcesRequest. */
                class SearchAllResourcesRequest implements ISearchAllResourcesRequest {

                    /**
                     * Constructs a new SearchAllResourcesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest);

                    /** SearchAllResourcesRequest scope. */
                    public scope: string;

                    /** SearchAllResourcesRequest query. */
                    public query: string;

                    /** SearchAllResourcesRequest assetTypes. */
                    public assetTypes: string[];

                    /** SearchAllResourcesRequest pageSize. */
                    public pageSize: number;

                    /** SearchAllResourcesRequest pageToken. */
                    public pageToken: string;

                    /** SearchAllResourcesRequest orderBy. */
                    public orderBy: string;

                    /**
                     * Creates a new SearchAllResourcesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchAllResourcesRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest): google.cloud.asset.v1p1beta1.SearchAllResourcesRequest;

                    /**
                     * Encodes the specified SearchAllResourcesRequest message. Does not implicitly {@link google.cloud.asset.v1p1beta1.SearchAllResourcesRequest.verify|verify} messages.
                     * @param message SearchAllResourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchAllResourcesRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1p1beta1.SearchAllResourcesRequest.verify|verify} messages.
                     * @param message SearchAllResourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p1beta1.ISearchAllResourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchAllResourcesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchAllResourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p1beta1.SearchAllResourcesRequest;

                    /**
                     * Decodes a SearchAllResourcesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchAllResourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p1beta1.SearchAllResourcesRequest;

                    /**
                     * Verifies a SearchAllResourcesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchAllResourcesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchAllResourcesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p1beta1.SearchAllResourcesRequest;

                    /**
                     * Creates a plain object from a SearchAllResourcesRequest message. Also converts values to other types if specified.
                     * @param message SearchAllResourcesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p1beta1.SearchAllResourcesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchAllResourcesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchAllResourcesResponse. */
                interface ISearchAllResourcesResponse {

                    /** SearchAllResourcesResponse results */
                    results?: (google.cloud.asset.v1p1beta1.IStandardResourceMetadata[]|null);

                    /** SearchAllResourcesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a SearchAllResourcesResponse. */
                class SearchAllResourcesResponse implements ISearchAllResourcesResponse {

                    /**
                     * Constructs a new SearchAllResourcesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p1beta1.ISearchAllResourcesResponse);

                    /** SearchAllResourcesResponse results. */
                    public results: google.cloud.asset.v1p1beta1.IStandardResourceMetadata[];

                    /** SearchAllResourcesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new SearchAllResourcesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchAllResourcesResponse instance
                     */
                    public static create(properties?: google.cloud.asset.v1p1beta1.ISearchAllResourcesResponse): google.cloud.asset.v1p1beta1.SearchAllResourcesResponse;

                    /**
                     * Encodes the specified SearchAllResourcesResponse message. Does not implicitly {@link google.cloud.asset.v1p1beta1.SearchAllResourcesResponse.verify|verify} messages.
                     * @param message SearchAllResourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p1beta1.ISearchAllResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchAllResourcesResponse message, length delimited. Does not implicitly {@link google.cloud.asset.v1p1beta1.SearchAllResourcesResponse.verify|verify} messages.
                     * @param message SearchAllResourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p1beta1.ISearchAllResourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchAllResourcesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchAllResourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p1beta1.SearchAllResourcesResponse;

                    /**
                     * Decodes a SearchAllResourcesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchAllResourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p1beta1.SearchAllResourcesResponse;

                    /**
                     * Verifies a SearchAllResourcesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchAllResourcesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchAllResourcesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p1beta1.SearchAllResourcesResponse;

                    /**
                     * Creates a plain object from a SearchAllResourcesResponse message. Also converts values to other types if specified.
                     * @param message SearchAllResourcesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p1beta1.SearchAllResourcesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchAllResourcesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchAllIamPoliciesRequest. */
                interface ISearchAllIamPoliciesRequest {

                    /** SearchAllIamPoliciesRequest scope */
                    scope?: (string|null);

                    /** SearchAllIamPoliciesRequest query */
                    query?: (string|null);

                    /** SearchAllIamPoliciesRequest pageSize */
                    pageSize?: (number|null);

                    /** SearchAllIamPoliciesRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a SearchAllIamPoliciesRequest. */
                class SearchAllIamPoliciesRequest implements ISearchAllIamPoliciesRequest {

                    /**
                     * Constructs a new SearchAllIamPoliciesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest);

                    /** SearchAllIamPoliciesRequest scope. */
                    public scope: string;

                    /** SearchAllIamPoliciesRequest query. */
                    public query: string;

                    /** SearchAllIamPoliciesRequest pageSize. */
                    public pageSize: number;

                    /** SearchAllIamPoliciesRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new SearchAllIamPoliciesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchAllIamPoliciesRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest): google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest;

                    /**
                     * Encodes the specified SearchAllIamPoliciesRequest message. Does not implicitly {@link google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest.verify|verify} messages.
                     * @param message SearchAllIamPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchAllIamPoliciesRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest.verify|verify} messages.
                     * @param message SearchAllIamPoliciesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchAllIamPoliciesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchAllIamPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest;

                    /**
                     * Decodes a SearchAllIamPoliciesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchAllIamPoliciesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest;

                    /**
                     * Verifies a SearchAllIamPoliciesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchAllIamPoliciesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchAllIamPoliciesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest;

                    /**
                     * Creates a plain object from a SearchAllIamPoliciesRequest message. Also converts values to other types if specified.
                     * @param message SearchAllIamPoliciesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p1beta1.SearchAllIamPoliciesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchAllIamPoliciesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SearchAllIamPoliciesResponse. */
                interface ISearchAllIamPoliciesResponse {

                    /** SearchAllIamPoliciesResponse results */
                    results?: (google.cloud.asset.v1p1beta1.IIamPolicySearchResult[]|null);

                    /** SearchAllIamPoliciesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a SearchAllIamPoliciesResponse. */
                class SearchAllIamPoliciesResponse implements ISearchAllIamPoliciesResponse {

                    /**
                     * Constructs a new SearchAllIamPoliciesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesResponse);

                    /** SearchAllIamPoliciesResponse results. */
                    public results: google.cloud.asset.v1p1beta1.IIamPolicySearchResult[];

                    /** SearchAllIamPoliciesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new SearchAllIamPoliciesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SearchAllIamPoliciesResponse instance
                     */
                    public static create(properties?: google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesResponse): google.cloud.asset.v1p1beta1.SearchAllIamPoliciesResponse;

                    /**
                     * Encodes the specified SearchAllIamPoliciesResponse message. Does not implicitly {@link google.cloud.asset.v1p1beta1.SearchAllIamPoliciesResponse.verify|verify} messages.
                     * @param message SearchAllIamPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SearchAllIamPoliciesResponse message, length delimited. Does not implicitly {@link google.cloud.asset.v1p1beta1.SearchAllIamPoliciesResponse.verify|verify} messages.
                     * @param message SearchAllIamPoliciesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p1beta1.ISearchAllIamPoliciesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SearchAllIamPoliciesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SearchAllIamPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p1beta1.SearchAllIamPoliciesResponse;

                    /**
                     * Decodes a SearchAllIamPoliciesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SearchAllIamPoliciesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p1beta1.SearchAllIamPoliciesResponse;

                    /**
                     * Verifies a SearchAllIamPoliciesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SearchAllIamPoliciesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SearchAllIamPoliciesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p1beta1.SearchAllIamPoliciesResponse;

                    /**
                     * Creates a plain object from a SearchAllIamPoliciesResponse message. Also converts values to other types if specified.
                     * @param message SearchAllIamPoliciesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p1beta1.SearchAllIamPoliciesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SearchAllIamPoliciesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a StandardResourceMetadata. */
                interface IStandardResourceMetadata {

                    /** StandardResourceMetadata name */
                    name?: (string|null);

                    /** StandardResourceMetadata assetType */
                    assetType?: (string|null);

                    /** StandardResourceMetadata project */
                    project?: (string|null);

                    /** StandardResourceMetadata displayName */
                    displayName?: (string|null);

                    /** StandardResourceMetadata description */
                    description?: (string|null);

                    /** StandardResourceMetadata additionalAttributes */
                    additionalAttributes?: (string[]|null);

                    /** StandardResourceMetadata location */
                    location?: (string|null);

                    /** StandardResourceMetadata labels */
                    labels?: ({ [k: string]: string }|null);

                    /** StandardResourceMetadata networkTags */
                    networkTags?: (string[]|null);
                }

                /** Represents a StandardResourceMetadata. */
                class StandardResourceMetadata implements IStandardResourceMetadata {

                    /**
                     * Constructs a new StandardResourceMetadata.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p1beta1.IStandardResourceMetadata);

                    /** StandardResourceMetadata name. */
                    public name: string;

                    /** StandardResourceMetadata assetType. */
                    public assetType: string;

                    /** StandardResourceMetadata project. */
                    public project: string;

                    /** StandardResourceMetadata displayName. */
                    public displayName: string;

                    /** StandardResourceMetadata description. */
                    public description: string;

                    /** StandardResourceMetadata additionalAttributes. */
                    public additionalAttributes: string[];

                    /** StandardResourceMetadata location. */
                    public location: string;

                    /** StandardResourceMetadata labels. */
                    public labels: { [k: string]: string };

                    /** StandardResourceMetadata networkTags. */
                    public networkTags: string[];

                    /**
                     * Creates a new StandardResourceMetadata instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns StandardResourceMetadata instance
                     */
                    public static create(properties?: google.cloud.asset.v1p1beta1.IStandardResourceMetadata): google.cloud.asset.v1p1beta1.StandardResourceMetadata;

                    /**
                     * Encodes the specified StandardResourceMetadata message. Does not implicitly {@link google.cloud.asset.v1p1beta1.StandardResourceMetadata.verify|verify} messages.
                     * @param message StandardResourceMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p1beta1.IStandardResourceMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified StandardResourceMetadata message, length delimited. Does not implicitly {@link google.cloud.asset.v1p1beta1.StandardResourceMetadata.verify|verify} messages.
                     * @param message StandardResourceMetadata message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p1beta1.IStandardResourceMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a StandardResourceMetadata message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns StandardResourceMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p1beta1.StandardResourceMetadata;

                    /**
                     * Decodes a StandardResourceMetadata message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns StandardResourceMetadata
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p1beta1.StandardResourceMetadata;

                    /**
                     * Verifies a StandardResourceMetadata message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a StandardResourceMetadata message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns StandardResourceMetadata
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p1beta1.StandardResourceMetadata;

                    /**
                     * Creates a plain object from a StandardResourceMetadata message. Also converts values to other types if specified.
                     * @param message StandardResourceMetadata
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p1beta1.StandardResourceMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this StandardResourceMetadata to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IamPolicySearchResult. */
                interface IIamPolicySearchResult {

                    /** IamPolicySearchResult resource */
                    resource?: (string|null);

                    /** IamPolicySearchResult project */
                    project?: (string|null);

                    /** IamPolicySearchResult policy */
                    policy?: (google.iam.v1.IPolicy|null);

                    /** IamPolicySearchResult explanation */
                    explanation?: (google.cloud.asset.v1p1beta1.IamPolicySearchResult.IExplanation|null);
                }

                /** Represents an IamPolicySearchResult. */
                class IamPolicySearchResult implements IIamPolicySearchResult {

                    /**
                     * Constructs a new IamPolicySearchResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p1beta1.IIamPolicySearchResult);

                    /** IamPolicySearchResult resource. */
                    public resource: string;

                    /** IamPolicySearchResult project. */
                    public project: string;

                    /** IamPolicySearchResult policy. */
                    public policy?: (google.iam.v1.IPolicy|null);

                    /** IamPolicySearchResult explanation. */
                    public explanation?: (google.cloud.asset.v1p1beta1.IamPolicySearchResult.IExplanation|null);

                    /**
                     * Creates a new IamPolicySearchResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IamPolicySearchResult instance
                     */
                    public static create(properties?: google.cloud.asset.v1p1beta1.IIamPolicySearchResult): google.cloud.asset.v1p1beta1.IamPolicySearchResult;

                    /**
                     * Encodes the specified IamPolicySearchResult message. Does not implicitly {@link google.cloud.asset.v1p1beta1.IamPolicySearchResult.verify|verify} messages.
                     * @param message IamPolicySearchResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p1beta1.IIamPolicySearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IamPolicySearchResult message, length delimited. Does not implicitly {@link google.cloud.asset.v1p1beta1.IamPolicySearchResult.verify|verify} messages.
                     * @param message IamPolicySearchResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p1beta1.IIamPolicySearchResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IamPolicySearchResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IamPolicySearchResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p1beta1.IamPolicySearchResult;

                    /**
                     * Decodes an IamPolicySearchResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IamPolicySearchResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p1beta1.IamPolicySearchResult;

                    /**
                     * Verifies an IamPolicySearchResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IamPolicySearchResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IamPolicySearchResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p1beta1.IamPolicySearchResult;

                    /**
                     * Creates a plain object from an IamPolicySearchResult message. Also converts values to other types if specified.
                     * @param message IamPolicySearchResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p1beta1.IamPolicySearchResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IamPolicySearchResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace IamPolicySearchResult {

                    /** Properties of an Explanation. */
                    interface IExplanation {

                        /** Explanation matchedPermissions */
                        matchedPermissions?: ({ [k: string]: google.cloud.asset.v1p1beta1.IPermissions }|null);
                    }

                    /** Represents an Explanation. */
                    class Explanation implements IExplanation {

                        /**
                         * Constructs a new Explanation.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p1beta1.IamPolicySearchResult.IExplanation);

                        /** Explanation matchedPermissions. */
                        public matchedPermissions: { [k: string]: google.cloud.asset.v1p1beta1.IPermissions };

                        /**
                         * Creates a new Explanation instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Explanation instance
                         */
                        public static create(properties?: google.cloud.asset.v1p1beta1.IamPolicySearchResult.IExplanation): google.cloud.asset.v1p1beta1.IamPolicySearchResult.Explanation;

                        /**
                         * Encodes the specified Explanation message. Does not implicitly {@link google.cloud.asset.v1p1beta1.IamPolicySearchResult.Explanation.verify|verify} messages.
                         * @param message Explanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p1beta1.IamPolicySearchResult.IExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Explanation message, length delimited. Does not implicitly {@link google.cloud.asset.v1p1beta1.IamPolicySearchResult.Explanation.verify|verify} messages.
                         * @param message Explanation message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p1beta1.IamPolicySearchResult.IExplanation, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Explanation message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Explanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p1beta1.IamPolicySearchResult.Explanation;

                        /**
                         * Decodes an Explanation message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Explanation
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p1beta1.IamPolicySearchResult.Explanation;

                        /**
                         * Verifies an Explanation message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Explanation message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Explanation
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p1beta1.IamPolicySearchResult.Explanation;

                        /**
                         * Creates a plain object from an Explanation message. Also converts values to other types if specified.
                         * @param message Explanation
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p1beta1.IamPolicySearchResult.Explanation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Explanation to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a Permissions. */
                interface IPermissions {

                    /** Permissions permissions */
                    permissions?: (string[]|null);
                }

                /** Represents a Permissions. */
                class Permissions implements IPermissions {

                    /**
                     * Constructs a new Permissions.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p1beta1.IPermissions);

                    /** Permissions permissions. */
                    public permissions: string[];

                    /**
                     * Creates a new Permissions instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Permissions instance
                     */
                    public static create(properties?: google.cloud.asset.v1p1beta1.IPermissions): google.cloud.asset.v1p1beta1.Permissions;

                    /**
                     * Encodes the specified Permissions message. Does not implicitly {@link google.cloud.asset.v1p1beta1.Permissions.verify|verify} messages.
                     * @param message Permissions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p1beta1.IPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Permissions message, length delimited. Does not implicitly {@link google.cloud.asset.v1p1beta1.Permissions.verify|verify} messages.
                     * @param message Permissions message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p1beta1.IPermissions, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Permissions message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Permissions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p1beta1.Permissions;

                    /**
                     * Decodes a Permissions message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Permissions
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p1beta1.Permissions;

                    /**
                     * Verifies a Permissions message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Permissions message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Permissions
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p1beta1.Permissions;

                    /**
                     * Creates a plain object from a Permissions message. Also converts values to other types if specified.
                     * @param message Permissions
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p1beta1.Permissions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Permissions to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1p2beta1. */
            namespace v1p2beta1 {

                /** Represents an AssetService */
                class AssetService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AssetService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AssetService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AssetService;

                    /**
                     * Calls CreateFeed.
                     * @param request CreateFeedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Feed
                     */
                    public createFeed(request: google.cloud.asset.v1p2beta1.ICreateFeedRequest, callback: google.cloud.asset.v1p2beta1.AssetService.CreateFeedCallback): void;

                    /**
                     * Calls CreateFeed.
                     * @param request CreateFeedRequest message or plain object
                     * @returns Promise
                     */
                    public createFeed(request: google.cloud.asset.v1p2beta1.ICreateFeedRequest): Promise<google.cloud.asset.v1p2beta1.Feed>;

                    /**
                     * Calls GetFeed.
                     * @param request GetFeedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Feed
                     */
                    public getFeed(request: google.cloud.asset.v1p2beta1.IGetFeedRequest, callback: google.cloud.asset.v1p2beta1.AssetService.GetFeedCallback): void;

                    /**
                     * Calls GetFeed.
                     * @param request GetFeedRequest message or plain object
                     * @returns Promise
                     */
                    public getFeed(request: google.cloud.asset.v1p2beta1.IGetFeedRequest): Promise<google.cloud.asset.v1p2beta1.Feed>;

                    /**
                     * Calls ListFeeds.
                     * @param request ListFeedsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFeedsResponse
                     */
                    public listFeeds(request: google.cloud.asset.v1p2beta1.IListFeedsRequest, callback: google.cloud.asset.v1p2beta1.AssetService.ListFeedsCallback): void;

                    /**
                     * Calls ListFeeds.
                     * @param request ListFeedsRequest message or plain object
                     * @returns Promise
                     */
                    public listFeeds(request: google.cloud.asset.v1p2beta1.IListFeedsRequest): Promise<google.cloud.asset.v1p2beta1.ListFeedsResponse>;

                    /**
                     * Calls UpdateFeed.
                     * @param request UpdateFeedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Feed
                     */
                    public updateFeed(request: google.cloud.asset.v1p2beta1.IUpdateFeedRequest, callback: google.cloud.asset.v1p2beta1.AssetService.UpdateFeedCallback): void;

                    /**
                     * Calls UpdateFeed.
                     * @param request UpdateFeedRequest message or plain object
                     * @returns Promise
                     */
                    public updateFeed(request: google.cloud.asset.v1p2beta1.IUpdateFeedRequest): Promise<google.cloud.asset.v1p2beta1.Feed>;

                    /**
                     * Calls DeleteFeed.
                     * @param request DeleteFeedRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Empty
                     */
                    public deleteFeed(request: google.cloud.asset.v1p2beta1.IDeleteFeedRequest, callback: google.cloud.asset.v1p2beta1.AssetService.DeleteFeedCallback): void;

                    /**
                     * Calls DeleteFeed.
                     * @param request DeleteFeedRequest message or plain object
                     * @returns Promise
                     */
                    public deleteFeed(request: google.cloud.asset.v1p2beta1.IDeleteFeedRequest): Promise<google.protobuf.Empty>;
                }

                namespace AssetService {

                    /**
                     * Callback as used by {@link google.cloud.asset.v1p2beta1.AssetService#createFeed}.
                     * @param error Error, if any
                     * @param [response] Feed
                     */
                    type CreateFeedCallback = (error: (Error|null), response?: google.cloud.asset.v1p2beta1.Feed) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1p2beta1.AssetService#getFeed}.
                     * @param error Error, if any
                     * @param [response] Feed
                     */
                    type GetFeedCallback = (error: (Error|null), response?: google.cloud.asset.v1p2beta1.Feed) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1p2beta1.AssetService#listFeeds}.
                     * @param error Error, if any
                     * @param [response] ListFeedsResponse
                     */
                    type ListFeedsCallback = (error: (Error|null), response?: google.cloud.asset.v1p2beta1.ListFeedsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1p2beta1.AssetService#updateFeed}.
                     * @param error Error, if any
                     * @param [response] Feed
                     */
                    type UpdateFeedCallback = (error: (Error|null), response?: google.cloud.asset.v1p2beta1.Feed) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1p2beta1.AssetService#deleteFeed}.
                     * @param error Error, if any
                     * @param [response] Empty
                     */
                    type DeleteFeedCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                }

                /** Properties of a CreateFeedRequest. */
                interface ICreateFeedRequest {

                    /** CreateFeedRequest parent */
                    parent?: (string|null);

                    /** CreateFeedRequest feedId */
                    feedId?: (string|null);

                    /** CreateFeedRequest feed */
                    feed?: (google.cloud.asset.v1p2beta1.IFeed|null);
                }

                /** Represents a CreateFeedRequest. */
                class CreateFeedRequest implements ICreateFeedRequest {

                    /**
                     * Constructs a new CreateFeedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.ICreateFeedRequest);

                    /** CreateFeedRequest parent. */
                    public parent: string;

                    /** CreateFeedRequest feedId. */
                    public feedId: string;

                    /** CreateFeedRequest feed. */
                    public feed?: (google.cloud.asset.v1p2beta1.IFeed|null);

                    /**
                     * Creates a new CreateFeedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateFeedRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.ICreateFeedRequest): google.cloud.asset.v1p2beta1.CreateFeedRequest;

                    /**
                     * Encodes the specified CreateFeedRequest message. Does not implicitly {@link google.cloud.asset.v1p2beta1.CreateFeedRequest.verify|verify} messages.
                     * @param message CreateFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.ICreateFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateFeedRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.CreateFeedRequest.verify|verify} messages.
                     * @param message CreateFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.ICreateFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateFeedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.CreateFeedRequest;

                    /**
                     * Decodes a CreateFeedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.CreateFeedRequest;

                    /**
                     * Verifies a CreateFeedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateFeedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateFeedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.CreateFeedRequest;

                    /**
                     * Creates a plain object from a CreateFeedRequest message. Also converts values to other types if specified.
                     * @param message CreateFeedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.CreateFeedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateFeedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetFeedRequest. */
                interface IGetFeedRequest {

                    /** GetFeedRequest name */
                    name?: (string|null);
                }

                /** Represents a GetFeedRequest. */
                class GetFeedRequest implements IGetFeedRequest {

                    /**
                     * Constructs a new GetFeedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.IGetFeedRequest);

                    /** GetFeedRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetFeedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetFeedRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.IGetFeedRequest): google.cloud.asset.v1p2beta1.GetFeedRequest;

                    /**
                     * Encodes the specified GetFeedRequest message. Does not implicitly {@link google.cloud.asset.v1p2beta1.GetFeedRequest.verify|verify} messages.
                     * @param message GetFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.IGetFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetFeedRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.GetFeedRequest.verify|verify} messages.
                     * @param message GetFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.IGetFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetFeedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.GetFeedRequest;

                    /**
                     * Decodes a GetFeedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.GetFeedRequest;

                    /**
                     * Verifies a GetFeedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetFeedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetFeedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.GetFeedRequest;

                    /**
                     * Creates a plain object from a GetFeedRequest message. Also converts values to other types if specified.
                     * @param message GetFeedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.GetFeedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetFeedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFeedsRequest. */
                interface IListFeedsRequest {

                    /** ListFeedsRequest parent */
                    parent?: (string|null);
                }

                /** Represents a ListFeedsRequest. */
                class ListFeedsRequest implements IListFeedsRequest {

                    /**
                     * Constructs a new ListFeedsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.IListFeedsRequest);

                    /** ListFeedsRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new ListFeedsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFeedsRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.IListFeedsRequest): google.cloud.asset.v1p2beta1.ListFeedsRequest;

                    /**
                     * Encodes the specified ListFeedsRequest message. Does not implicitly {@link google.cloud.asset.v1p2beta1.ListFeedsRequest.verify|verify} messages.
                     * @param message ListFeedsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.IListFeedsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFeedsRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.ListFeedsRequest.verify|verify} messages.
                     * @param message ListFeedsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.IListFeedsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFeedsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFeedsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.ListFeedsRequest;

                    /**
                     * Decodes a ListFeedsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFeedsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.ListFeedsRequest;

                    /**
                     * Verifies a ListFeedsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFeedsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFeedsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.ListFeedsRequest;

                    /**
                     * Creates a plain object from a ListFeedsRequest message. Also converts values to other types if specified.
                     * @param message ListFeedsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.ListFeedsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFeedsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFeedsResponse. */
                interface IListFeedsResponse {

                    /** ListFeedsResponse feeds */
                    feeds?: (google.cloud.asset.v1p2beta1.IFeed[]|null);
                }

                /** Represents a ListFeedsResponse. */
                class ListFeedsResponse implements IListFeedsResponse {

                    /**
                     * Constructs a new ListFeedsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.IListFeedsResponse);

                    /** ListFeedsResponse feeds. */
                    public feeds: google.cloud.asset.v1p2beta1.IFeed[];

                    /**
                     * Creates a new ListFeedsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFeedsResponse instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.IListFeedsResponse): google.cloud.asset.v1p2beta1.ListFeedsResponse;

                    /**
                     * Encodes the specified ListFeedsResponse message. Does not implicitly {@link google.cloud.asset.v1p2beta1.ListFeedsResponse.verify|verify} messages.
                     * @param message ListFeedsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.IListFeedsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFeedsResponse message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.ListFeedsResponse.verify|verify} messages.
                     * @param message ListFeedsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.IListFeedsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFeedsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFeedsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.ListFeedsResponse;

                    /**
                     * Decodes a ListFeedsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFeedsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.ListFeedsResponse;

                    /**
                     * Verifies a ListFeedsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFeedsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFeedsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.ListFeedsResponse;

                    /**
                     * Creates a plain object from a ListFeedsResponse message. Also converts values to other types if specified.
                     * @param message ListFeedsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.ListFeedsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFeedsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateFeedRequest. */
                interface IUpdateFeedRequest {

                    /** UpdateFeedRequest feed */
                    feed?: (google.cloud.asset.v1p2beta1.IFeed|null);

                    /** UpdateFeedRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateFeedRequest. */
                class UpdateFeedRequest implements IUpdateFeedRequest {

                    /**
                     * Constructs a new UpdateFeedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.IUpdateFeedRequest);

                    /** UpdateFeedRequest feed. */
                    public feed?: (google.cloud.asset.v1p2beta1.IFeed|null);

                    /** UpdateFeedRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateFeedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFeedRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.IUpdateFeedRequest): google.cloud.asset.v1p2beta1.UpdateFeedRequest;

                    /**
                     * Encodes the specified UpdateFeedRequest message. Does not implicitly {@link google.cloud.asset.v1p2beta1.UpdateFeedRequest.verify|verify} messages.
                     * @param message UpdateFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.IUpdateFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFeedRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.UpdateFeedRequest.verify|verify} messages.
                     * @param message UpdateFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.IUpdateFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFeedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.UpdateFeedRequest;

                    /**
                     * Decodes an UpdateFeedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.UpdateFeedRequest;

                    /**
                     * Verifies an UpdateFeedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFeedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFeedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.UpdateFeedRequest;

                    /**
                     * Creates a plain object from an UpdateFeedRequest message. Also converts values to other types if specified.
                     * @param message UpdateFeedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.UpdateFeedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFeedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DeleteFeedRequest. */
                interface IDeleteFeedRequest {

                    /** DeleteFeedRequest name */
                    name?: (string|null);
                }

                /** Represents a DeleteFeedRequest. */
                class DeleteFeedRequest implements IDeleteFeedRequest {

                    /**
                     * Constructs a new DeleteFeedRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.IDeleteFeedRequest);

                    /** DeleteFeedRequest name. */
                    public name: string;

                    /**
                     * Creates a new DeleteFeedRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DeleteFeedRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.IDeleteFeedRequest): google.cloud.asset.v1p2beta1.DeleteFeedRequest;

                    /**
                     * Encodes the specified DeleteFeedRequest message. Does not implicitly {@link google.cloud.asset.v1p2beta1.DeleteFeedRequest.verify|verify} messages.
                     * @param message DeleteFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.IDeleteFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DeleteFeedRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.DeleteFeedRequest.verify|verify} messages.
                     * @param message DeleteFeedRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.IDeleteFeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DeleteFeedRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DeleteFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.DeleteFeedRequest;

                    /**
                     * Decodes a DeleteFeedRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DeleteFeedRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.DeleteFeedRequest;

                    /**
                     * Verifies a DeleteFeedRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DeleteFeedRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DeleteFeedRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.DeleteFeedRequest;

                    /**
                     * Creates a plain object from a DeleteFeedRequest message. Also converts values to other types if specified.
                     * @param message DeleteFeedRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.DeleteFeedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DeleteFeedRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OutputConfig. */
                interface IOutputConfig {

                    /** OutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.asset.v1p2beta1.IGcsDestination|null);
                }

                /** Represents an OutputConfig. */
                class OutputConfig implements IOutputConfig {

                    /**
                     * Constructs a new OutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.IOutputConfig);

                    /** OutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.asset.v1p2beta1.IGcsDestination|null);

                    /** OutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new OutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OutputConfig instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.IOutputConfig): google.cloud.asset.v1p2beta1.OutputConfig;

                    /**
                     * Encodes the specified OutputConfig message. Does not implicitly {@link google.cloud.asset.v1p2beta1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OutputConfig message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.OutputConfig.verify|verify} messages.
                     * @param message OutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.IOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.OutputConfig;

                    /**
                     * Decodes an OutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.OutputConfig;

                    /**
                     * Verifies an OutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.OutputConfig;

                    /**
                     * Creates a plain object from an OutputConfig message. Also converts values to other types if specified.
                     * @param message OutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.OutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GcsDestination. */
                interface IGcsDestination {

                    /** GcsDestination uri */
                    uri?: (string|null);
                }

                /** Represents a GcsDestination. */
                class GcsDestination implements IGcsDestination {

                    /**
                     * Constructs a new GcsDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.IGcsDestination);

                    /** GcsDestination uri. */
                    public uri: string;

                    /** GcsDestination objectUri. */
                    public objectUri?: "uri";

                    /**
                     * Creates a new GcsDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GcsDestination instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.IGcsDestination): google.cloud.asset.v1p2beta1.GcsDestination;

                    /**
                     * Encodes the specified GcsDestination message. Does not implicitly {@link google.cloud.asset.v1p2beta1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GcsDestination message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.GcsDestination.verify|verify} messages.
                     * @param message GcsDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.GcsDestination;

                    /**
                     * Decodes a GcsDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GcsDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.GcsDestination;

                    /**
                     * Verifies a GcsDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GcsDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GcsDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.GcsDestination;

                    /**
                     * Creates a plain object from a GcsDestination message. Also converts values to other types if specified.
                     * @param message GcsDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.GcsDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GcsDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a PubsubDestination. */
                interface IPubsubDestination {

                    /** PubsubDestination topic */
                    topic?: (string|null);
                }

                /** Represents a PubsubDestination. */
                class PubsubDestination implements IPubsubDestination {

                    /**
                     * Constructs a new PubsubDestination.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.IPubsubDestination);

                    /** PubsubDestination topic. */
                    public topic: string;

                    /**
                     * Creates a new PubsubDestination instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns PubsubDestination instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.IPubsubDestination): google.cloud.asset.v1p2beta1.PubsubDestination;

                    /**
                     * Encodes the specified PubsubDestination message. Does not implicitly {@link google.cloud.asset.v1p2beta1.PubsubDestination.verify|verify} messages.
                     * @param message PubsubDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.IPubsubDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified PubsubDestination message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.PubsubDestination.verify|verify} messages.
                     * @param message PubsubDestination message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.IPubsubDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a PubsubDestination message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns PubsubDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.PubsubDestination;

                    /**
                     * Decodes a PubsubDestination message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns PubsubDestination
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.PubsubDestination;

                    /**
                     * Verifies a PubsubDestination message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a PubsubDestination message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns PubsubDestination
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.PubsubDestination;

                    /**
                     * Creates a plain object from a PubsubDestination message. Also converts values to other types if specified.
                     * @param message PubsubDestination
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.PubsubDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this PubsubDestination to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a FeedOutputConfig. */
                interface IFeedOutputConfig {

                    /** FeedOutputConfig pubsubDestination */
                    pubsubDestination?: (google.cloud.asset.v1p2beta1.IPubsubDestination|null);
                }

                /** Represents a FeedOutputConfig. */
                class FeedOutputConfig implements IFeedOutputConfig {

                    /**
                     * Constructs a new FeedOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.IFeedOutputConfig);

                    /** FeedOutputConfig pubsubDestination. */
                    public pubsubDestination?: (google.cloud.asset.v1p2beta1.IPubsubDestination|null);

                    /** FeedOutputConfig destination. */
                    public destination?: "pubsubDestination";

                    /**
                     * Creates a new FeedOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns FeedOutputConfig instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.IFeedOutputConfig): google.cloud.asset.v1p2beta1.FeedOutputConfig;

                    /**
                     * Encodes the specified FeedOutputConfig message. Does not implicitly {@link google.cloud.asset.v1p2beta1.FeedOutputConfig.verify|verify} messages.
                     * @param message FeedOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.IFeedOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified FeedOutputConfig message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.FeedOutputConfig.verify|verify} messages.
                     * @param message FeedOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.IFeedOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a FeedOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns FeedOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.FeedOutputConfig;

                    /**
                     * Decodes a FeedOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns FeedOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.FeedOutputConfig;

                    /**
                     * Verifies a FeedOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a FeedOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns FeedOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.FeedOutputConfig;

                    /**
                     * Creates a plain object from a FeedOutputConfig message. Also converts values to other types if specified.
                     * @param message FeedOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.FeedOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this FeedOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Feed. */
                interface IFeed {

                    /** Feed name */
                    name?: (string|null);

                    /** Feed assetNames */
                    assetNames?: (string[]|null);

                    /** Feed assetTypes */
                    assetTypes?: (string[]|null);

                    /** Feed contentType */
                    contentType?: (google.cloud.asset.v1p2beta1.ContentType|keyof typeof google.cloud.asset.v1p2beta1.ContentType|null);

                    /** Feed feedOutputConfig */
                    feedOutputConfig?: (google.cloud.asset.v1p2beta1.IFeedOutputConfig|null);
                }

                /** Represents a Feed. */
                class Feed implements IFeed {

                    /**
                     * Constructs a new Feed.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.IFeed);

                    /** Feed name. */
                    public name: string;

                    /** Feed assetNames. */
                    public assetNames: string[];

                    /** Feed assetTypes. */
                    public assetTypes: string[];

                    /** Feed contentType. */
                    public contentType: (google.cloud.asset.v1p2beta1.ContentType|keyof typeof google.cloud.asset.v1p2beta1.ContentType);

                    /** Feed feedOutputConfig. */
                    public feedOutputConfig?: (google.cloud.asset.v1p2beta1.IFeedOutputConfig|null);

                    /**
                     * Creates a new Feed instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Feed instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.IFeed): google.cloud.asset.v1p2beta1.Feed;

                    /**
                     * Encodes the specified Feed message. Does not implicitly {@link google.cloud.asset.v1p2beta1.Feed.verify|verify} messages.
                     * @param message Feed message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.IFeed, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Feed message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.Feed.verify|verify} messages.
                     * @param message Feed message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.IFeed, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Feed message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Feed
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.Feed;

                    /**
                     * Decodes a Feed message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Feed
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.Feed;

                    /**
                     * Verifies a Feed message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Feed message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Feed
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.Feed;

                    /**
                     * Creates a plain object from a Feed message. Also converts values to other types if specified.
                     * @param message Feed
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.Feed, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Feed to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** ContentType enum. */
                enum ContentType {
                    CONTENT_TYPE_UNSPECIFIED = 0,
                    RESOURCE = 1,
                    IAM_POLICY = 2
                }

                /** Properties of a TemporalAsset. */
                interface ITemporalAsset {

                    /** TemporalAsset window */
                    window?: (google.cloud.asset.v1p2beta1.ITimeWindow|null);

                    /** TemporalAsset deleted */
                    deleted?: (boolean|null);

                    /** TemporalAsset asset */
                    asset?: (google.cloud.asset.v1p2beta1.IAsset|null);
                }

                /** Represents a TemporalAsset. */
                class TemporalAsset implements ITemporalAsset {

                    /**
                     * Constructs a new TemporalAsset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.ITemporalAsset);

                    /** TemporalAsset window. */
                    public window?: (google.cloud.asset.v1p2beta1.ITimeWindow|null);

                    /** TemporalAsset deleted. */
                    public deleted: boolean;

                    /** TemporalAsset asset. */
                    public asset?: (google.cloud.asset.v1p2beta1.IAsset|null);

                    /**
                     * Creates a new TemporalAsset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TemporalAsset instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.ITemporalAsset): google.cloud.asset.v1p2beta1.TemporalAsset;

                    /**
                     * Encodes the specified TemporalAsset message. Does not implicitly {@link google.cloud.asset.v1p2beta1.TemporalAsset.verify|verify} messages.
                     * @param message TemporalAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.ITemporalAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TemporalAsset message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.TemporalAsset.verify|verify} messages.
                     * @param message TemporalAsset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.ITemporalAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TemporalAsset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TemporalAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.TemporalAsset;

                    /**
                     * Decodes a TemporalAsset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TemporalAsset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.TemporalAsset;

                    /**
                     * Verifies a TemporalAsset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TemporalAsset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TemporalAsset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.TemporalAsset;

                    /**
                     * Creates a plain object from a TemporalAsset message. Also converts values to other types if specified.
                     * @param message TemporalAsset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.TemporalAsset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TemporalAsset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a TimeWindow. */
                interface ITimeWindow {

                    /** TimeWindow startTime */
                    startTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow endTime */
                    endTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a TimeWindow. */
                class TimeWindow implements ITimeWindow {

                    /**
                     * Constructs a new TimeWindow.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.ITimeWindow);

                    /** TimeWindow startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /** TimeWindow endTime. */
                    public endTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new TimeWindow instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns TimeWindow instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.ITimeWindow): google.cloud.asset.v1p2beta1.TimeWindow;

                    /**
                     * Encodes the specified TimeWindow message. Does not implicitly {@link google.cloud.asset.v1p2beta1.TimeWindow.verify|verify} messages.
                     * @param message TimeWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.ITimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified TimeWindow message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.TimeWindow.verify|verify} messages.
                     * @param message TimeWindow message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.ITimeWindow, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a TimeWindow message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns TimeWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.TimeWindow;

                    /**
                     * Decodes a TimeWindow message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns TimeWindow
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.TimeWindow;

                    /**
                     * Verifies a TimeWindow message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a TimeWindow message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns TimeWindow
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.TimeWindow;

                    /**
                     * Creates a plain object from a TimeWindow message. Also converts values to other types if specified.
                     * @param message TimeWindow
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.TimeWindow, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this TimeWindow to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Asset. */
                interface IAsset {

                    /** Asset name */
                    name?: (string|null);

                    /** Asset assetType */
                    assetType?: (string|null);

                    /** Asset resource */
                    resource?: (google.cloud.asset.v1p2beta1.IResource|null);

                    /** Asset iamPolicy */
                    iamPolicy?: (google.iam.v1.IPolicy|null);

                    /** Asset ancestors */
                    ancestors?: (string[]|null);
                }

                /** Represents an Asset. */
                class Asset implements IAsset {

                    /**
                     * Constructs a new Asset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.IAsset);

                    /** Asset name. */
                    public name: string;

                    /** Asset assetType. */
                    public assetType: string;

                    /** Asset resource. */
                    public resource?: (google.cloud.asset.v1p2beta1.IResource|null);

                    /** Asset iamPolicy. */
                    public iamPolicy?: (google.iam.v1.IPolicy|null);

                    /** Asset ancestors. */
                    public ancestors: string[];

                    /**
                     * Creates a new Asset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Asset instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.IAsset): google.cloud.asset.v1p2beta1.Asset;

                    /**
                     * Encodes the specified Asset message. Does not implicitly {@link google.cloud.asset.v1p2beta1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Asset message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Asset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.Asset;

                    /**
                     * Decodes an Asset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.Asset;

                    /**
                     * Verifies an Asset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Asset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Asset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.Asset;

                    /**
                     * Creates a plain object from an Asset message. Also converts values to other types if specified.
                     * @param message Asset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.Asset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Asset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Resource. */
                interface IResource {

                    /** Resource version */
                    version?: (string|null);

                    /** Resource discoveryDocumentUri */
                    discoveryDocumentUri?: (string|null);

                    /** Resource discoveryName */
                    discoveryName?: (string|null);

                    /** Resource resourceUrl */
                    resourceUrl?: (string|null);

                    /** Resource parent */
                    parent?: (string|null);

                    /** Resource data */
                    data?: (google.protobuf.IStruct|null);
                }

                /** Represents a Resource. */
                class Resource implements IResource {

                    /**
                     * Constructs a new Resource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p2beta1.IResource);

                    /** Resource version. */
                    public version: string;

                    /** Resource discoveryDocumentUri. */
                    public discoveryDocumentUri: string;

                    /** Resource discoveryName. */
                    public discoveryName: string;

                    /** Resource resourceUrl. */
                    public resourceUrl: string;

                    /** Resource parent. */
                    public parent: string;

                    /** Resource data. */
                    public data?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new Resource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Resource instance
                     */
                    public static create(properties?: google.cloud.asset.v1p2beta1.IResource): google.cloud.asset.v1p2beta1.Resource;

                    /**
                     * Encodes the specified Resource message. Does not implicitly {@link google.cloud.asset.v1p2beta1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p2beta1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Resource message, length delimited. Does not implicitly {@link google.cloud.asset.v1p2beta1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p2beta1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Resource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p2beta1.Resource;

                    /**
                     * Decodes a Resource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p2beta1.Resource;

                    /**
                     * Verifies a Resource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Resource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Resource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p2beta1.Resource;

                    /**
                     * Creates a plain object from a Resource message. Also converts values to other types if specified.
                     * @param message Resource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p2beta1.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Resource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1p4beta1. */
            namespace v1p4beta1 {

                /** Represents an AssetService */
                class AssetService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AssetService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AssetService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AssetService;

                    /**
                     * Calls AnalyzeIamPolicy.
                     * @param request AnalyzeIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and AnalyzeIamPolicyResponse
                     */
                    public analyzeIamPolicy(request: google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest, callback: google.cloud.asset.v1p4beta1.AssetService.AnalyzeIamPolicyCallback): void;

                    /**
                     * Calls AnalyzeIamPolicy.
                     * @param request AnalyzeIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public analyzeIamPolicy(request: google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest): Promise<google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse>;

                    /**
                     * Calls ExportIamPolicyAnalysis.
                     * @param request ExportIamPolicyAnalysisRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public exportIamPolicyAnalysis(request: google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest, callback: google.cloud.asset.v1p4beta1.AssetService.ExportIamPolicyAnalysisCallback): void;

                    /**
                     * Calls ExportIamPolicyAnalysis.
                     * @param request ExportIamPolicyAnalysisRequest message or plain object
                     * @returns Promise
                     */
                    public exportIamPolicyAnalysis(request: google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest): Promise<google.longrunning.Operation>;
                }

                namespace AssetService {

                    /**
                     * Callback as used by {@link google.cloud.asset.v1p4beta1.AssetService#analyzeIamPolicy}.
                     * @param error Error, if any
                     * @param [response] AnalyzeIamPolicyResponse
                     */
                    type AnalyzeIamPolicyCallback = (error: (Error|null), response?: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.asset.v1p4beta1.AssetService#exportIamPolicyAnalysis}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type ExportIamPolicyAnalysisCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
                }

                /** Properties of an IamPolicyAnalysisQuery. */
                interface IIamPolicyAnalysisQuery {

                    /** IamPolicyAnalysisQuery parent */
                    parent?: (string|null);

                    /** IamPolicyAnalysisQuery resourceSelector */
                    resourceSelector?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IResourceSelector|null);

                    /** IamPolicyAnalysisQuery identitySelector */
                    identitySelector?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IIdentitySelector|null);

                    /** IamPolicyAnalysisQuery accessSelector */
                    accessSelector?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IAccessSelector|null);
                }

                /** Represents an IamPolicyAnalysisQuery. */
                class IamPolicyAnalysisQuery implements IIamPolicyAnalysisQuery {

                    /**
                     * Constructs a new IamPolicyAnalysisQuery.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p4beta1.IIamPolicyAnalysisQuery);

                    /** IamPolicyAnalysisQuery parent. */
                    public parent: string;

                    /** IamPolicyAnalysisQuery resourceSelector. */
                    public resourceSelector?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IResourceSelector|null);

                    /** IamPolicyAnalysisQuery identitySelector. */
                    public identitySelector?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IIdentitySelector|null);

                    /** IamPolicyAnalysisQuery accessSelector. */
                    public accessSelector?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IAccessSelector|null);

                    /**
                     * Creates a new IamPolicyAnalysisQuery instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IamPolicyAnalysisQuery instance
                     */
                    public static create(properties?: google.cloud.asset.v1p4beta1.IIamPolicyAnalysisQuery): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery;

                    /**
                     * Encodes the specified IamPolicyAnalysisQuery message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.verify|verify} messages.
                     * @param message IamPolicyAnalysisQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p4beta1.IIamPolicyAnalysisQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IamPolicyAnalysisQuery message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.verify|verify} messages.
                     * @param message IamPolicyAnalysisQuery message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IIamPolicyAnalysisQuery, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IamPolicyAnalysisQuery message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IamPolicyAnalysisQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery;

                    /**
                     * Decodes an IamPolicyAnalysisQuery message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IamPolicyAnalysisQuery
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery;

                    /**
                     * Verifies an IamPolicyAnalysisQuery message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IamPolicyAnalysisQuery message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IamPolicyAnalysisQuery
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery;

                    /**
                     * Creates a plain object from an IamPolicyAnalysisQuery message. Also converts values to other types if specified.
                     * @param message IamPolicyAnalysisQuery
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IamPolicyAnalysisQuery to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace IamPolicyAnalysisQuery {

                    /** Properties of a ResourceSelector. */
                    interface IResourceSelector {

                        /** ResourceSelector fullResourceName */
                        fullResourceName?: (string|null);
                    }

                    /** Represents a ResourceSelector. */
                    class ResourceSelector implements IResourceSelector {

                        /**
                         * Constructs a new ResourceSelector.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IResourceSelector);

                        /** ResourceSelector fullResourceName. */
                        public fullResourceName: string;

                        /**
                         * Creates a new ResourceSelector instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ResourceSelector instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IResourceSelector): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.ResourceSelector;

                        /**
                         * Encodes the specified ResourceSelector message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.ResourceSelector.verify|verify} messages.
                         * @param message ResourceSelector message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IResourceSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ResourceSelector message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.ResourceSelector.verify|verify} messages.
                         * @param message ResourceSelector message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IResourceSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ResourceSelector message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ResourceSelector
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.ResourceSelector;

                        /**
                         * Decodes a ResourceSelector message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ResourceSelector
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.ResourceSelector;

                        /**
                         * Verifies a ResourceSelector message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ResourceSelector message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ResourceSelector
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.ResourceSelector;

                        /**
                         * Creates a plain object from a ResourceSelector message. Also converts values to other types if specified.
                         * @param message ResourceSelector
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.ResourceSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ResourceSelector to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an IdentitySelector. */
                    interface IIdentitySelector {

                        /** IdentitySelector identity */
                        identity?: (string|null);
                    }

                    /** Represents an IdentitySelector. */
                    class IdentitySelector implements IIdentitySelector {

                        /**
                         * Constructs a new IdentitySelector.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IIdentitySelector);

                        /** IdentitySelector identity. */
                        public identity: string;

                        /**
                         * Creates a new IdentitySelector instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IdentitySelector instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IIdentitySelector): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IdentitySelector;

                        /**
                         * Encodes the specified IdentitySelector message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IdentitySelector.verify|verify} messages.
                         * @param message IdentitySelector message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IIdentitySelector, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IdentitySelector message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IdentitySelector.verify|verify} messages.
                         * @param message IdentitySelector message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IIdentitySelector, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IdentitySelector message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IdentitySelector
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IdentitySelector;

                        /**
                         * Decodes an IdentitySelector message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IdentitySelector
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IdentitySelector;

                        /**
                         * Verifies an IdentitySelector message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IdentitySelector message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IdentitySelector
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IdentitySelector;

                        /**
                         * Creates a plain object from an IdentitySelector message. Also converts values to other types if specified.
                         * @param message IdentitySelector
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IdentitySelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IdentitySelector to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AccessSelector. */
                    interface IAccessSelector {

                        /** AccessSelector roles */
                        roles?: (string[]|null);

                        /** AccessSelector permissions */
                        permissions?: (string[]|null);
                    }

                    /** Represents an AccessSelector. */
                    class AccessSelector implements IAccessSelector {

                        /**
                         * Constructs a new AccessSelector.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IAccessSelector);

                        /** AccessSelector roles. */
                        public roles: string[];

                        /** AccessSelector permissions. */
                        public permissions: string[];

                        /**
                         * Creates a new AccessSelector instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AccessSelector instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IAccessSelector): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.AccessSelector;

                        /**
                         * Encodes the specified AccessSelector message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.AccessSelector.verify|verify} messages.
                         * @param message AccessSelector message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IAccessSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AccessSelector message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.AccessSelector.verify|verify} messages.
                         * @param message AccessSelector message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.IAccessSelector, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AccessSelector message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AccessSelector
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.AccessSelector;

                        /**
                         * Decodes an AccessSelector message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AccessSelector
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.AccessSelector;

                        /**
                         * Verifies an AccessSelector message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AccessSelector message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AccessSelector
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.AccessSelector;

                        /**
                         * Creates a plain object from an AccessSelector message. Also converts values to other types if specified.
                         * @param message AccessSelector
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisQuery.AccessSelector, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AccessSelector to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an AnalyzeIamPolicyRequest. */
                interface IAnalyzeIamPolicyRequest {

                    /** AnalyzeIamPolicyRequest analysisQuery */
                    analysisQuery?: (google.cloud.asset.v1p4beta1.IIamPolicyAnalysisQuery|null);

                    /** AnalyzeIamPolicyRequest options */
                    options?: (google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.IOptions|null);
                }

                /** Represents an AnalyzeIamPolicyRequest. */
                class AnalyzeIamPolicyRequest implements IAnalyzeIamPolicyRequest {

                    /**
                     * Constructs a new AnalyzeIamPolicyRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest);

                    /** AnalyzeIamPolicyRequest analysisQuery. */
                    public analysisQuery?: (google.cloud.asset.v1p4beta1.IIamPolicyAnalysisQuery|null);

                    /** AnalyzeIamPolicyRequest options. */
                    public options?: (google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.IOptions|null);

                    /**
                     * Creates a new AnalyzeIamPolicyRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeIamPolicyRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest;

                    /**
                     * Encodes the specified AnalyzeIamPolicyRequest message. Does not implicitly {@link google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.verify|verify} messages.
                     * @param message AnalyzeIamPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeIamPolicyRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.verify|verify} messages.
                     * @param message AnalyzeIamPolicyRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeIamPolicyRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeIamPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest;

                    /**
                     * Decodes an AnalyzeIamPolicyRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeIamPolicyRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest;

                    /**
                     * Verifies an AnalyzeIamPolicyRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeIamPolicyRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest;

                    /**
                     * Creates a plain object from an AnalyzeIamPolicyRequest message. Also converts values to other types if specified.
                     * @param message AnalyzeIamPolicyRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeIamPolicyRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AnalyzeIamPolicyRequest {

                    /** Properties of an Options. */
                    interface IOptions {

                        /** Options expandGroups */
                        expandGroups?: (boolean|null);

                        /** Options expandRoles */
                        expandRoles?: (boolean|null);

                        /** Options expandResources */
                        expandResources?: (boolean|null);

                        /** Options outputResourceEdges */
                        outputResourceEdges?: (boolean|null);

                        /** Options outputGroupEdges */
                        outputGroupEdges?: (boolean|null);

                        /** Options analyzeServiceAccountImpersonation */
                        analyzeServiceAccountImpersonation?: (boolean|null);

                        /** Options executionTimeout */
                        executionTimeout?: (google.protobuf.IDuration|null);
                    }

                    /** Represents an Options. */
                    class Options implements IOptions {

                        /**
                         * Constructs a new Options.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.IOptions);

                        /** Options expandGroups. */
                        public expandGroups: boolean;

                        /** Options expandRoles. */
                        public expandRoles: boolean;

                        /** Options expandResources. */
                        public expandResources: boolean;

                        /** Options outputResourceEdges. */
                        public outputResourceEdges: boolean;

                        /** Options outputGroupEdges. */
                        public outputGroupEdges: boolean;

                        /** Options analyzeServiceAccountImpersonation. */
                        public analyzeServiceAccountImpersonation: boolean;

                        /** Options executionTimeout. */
                        public executionTimeout?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new Options instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Options instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.IOptions): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.Options;

                        /**
                         * Encodes the specified Options message. Does not implicitly {@link google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.Options.verify|verify} messages.
                         * @param message Options message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Options message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.Options.verify|verify} messages.
                         * @param message Options message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Options message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Options
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.Options;

                        /**
                         * Decodes an Options message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Options
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.Options;

                        /**
                         * Verifies an Options message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Options message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Options
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.Options;

                        /**
                         * Creates a plain object from an Options message. Also converts values to other types if specified.
                         * @param message Options
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyRequest.Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Options to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an AnalyzeIamPolicyResponse. */
                interface IAnalyzeIamPolicyResponse {

                    /** AnalyzeIamPolicyResponse mainAnalysis */
                    mainAnalysis?: (google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IIamPolicyAnalysis|null);

                    /** AnalyzeIamPolicyResponse serviceAccountImpersonationAnalysis */
                    serviceAccountImpersonationAnalysis?: (google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IIamPolicyAnalysis[]|null);

                    /** AnalyzeIamPolicyResponse fullyExplored */
                    fullyExplored?: (boolean|null);

                    /** AnalyzeIamPolicyResponse nonCriticalErrors */
                    nonCriticalErrors?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAnalysisState[]|null);
                }

                /** Represents an AnalyzeIamPolicyResponse. */
                class AnalyzeIamPolicyResponse implements IAnalyzeIamPolicyResponse {

                    /**
                     * Constructs a new AnalyzeIamPolicyResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse);

                    /** AnalyzeIamPolicyResponse mainAnalysis. */
                    public mainAnalysis?: (google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IIamPolicyAnalysis|null);

                    /** AnalyzeIamPolicyResponse serviceAccountImpersonationAnalysis. */
                    public serviceAccountImpersonationAnalysis: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IIamPolicyAnalysis[];

                    /** AnalyzeIamPolicyResponse fullyExplored. */
                    public fullyExplored: boolean;

                    /** AnalyzeIamPolicyResponse nonCriticalErrors. */
                    public nonCriticalErrors: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAnalysisState[];

                    /**
                     * Creates a new AnalyzeIamPolicyResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AnalyzeIamPolicyResponse instance
                     */
                    public static create(properties?: google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse;

                    /**
                     * Encodes the specified AnalyzeIamPolicyResponse message. Does not implicitly {@link google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.verify|verify} messages.
                     * @param message AnalyzeIamPolicyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AnalyzeIamPolicyResponse message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.verify|verify} messages.
                     * @param message AnalyzeIamPolicyResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IAnalyzeIamPolicyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AnalyzeIamPolicyResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AnalyzeIamPolicyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse;

                    /**
                     * Decodes an AnalyzeIamPolicyResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AnalyzeIamPolicyResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse;

                    /**
                     * Verifies an AnalyzeIamPolicyResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AnalyzeIamPolicyResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AnalyzeIamPolicyResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse;

                    /**
                     * Creates a plain object from an AnalyzeIamPolicyResponse message. Also converts values to other types if specified.
                     * @param message AnalyzeIamPolicyResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AnalyzeIamPolicyResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace AnalyzeIamPolicyResponse {

                    /** Properties of an IamPolicyAnalysis. */
                    interface IIamPolicyAnalysis {

                        /** IamPolicyAnalysis analysisQuery */
                        analysisQuery?: (google.cloud.asset.v1p4beta1.IIamPolicyAnalysisQuery|null);

                        /** IamPolicyAnalysis analysisResults */
                        analysisResults?: (google.cloud.asset.v1p4beta1.IIamPolicyAnalysisResult[]|null);

                        /** IamPolicyAnalysis fullyExplored */
                        fullyExplored?: (boolean|null);
                    }

                    /** Represents an IamPolicyAnalysis. */
                    class IamPolicyAnalysis implements IIamPolicyAnalysis {

                        /**
                         * Constructs a new IamPolicyAnalysis.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IIamPolicyAnalysis);

                        /** IamPolicyAnalysis analysisQuery. */
                        public analysisQuery?: (google.cloud.asset.v1p4beta1.IIamPolicyAnalysisQuery|null);

                        /** IamPolicyAnalysis analysisResults. */
                        public analysisResults: google.cloud.asset.v1p4beta1.IIamPolicyAnalysisResult[];

                        /** IamPolicyAnalysis fullyExplored. */
                        public fullyExplored: boolean;

                        /**
                         * Creates a new IamPolicyAnalysis instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IamPolicyAnalysis instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IIamPolicyAnalysis): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IamPolicyAnalysis;

                        /**
                         * Encodes the specified IamPolicyAnalysis message. Does not implicitly {@link google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IamPolicyAnalysis.verify|verify} messages.
                         * @param message IamPolicyAnalysis message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IIamPolicyAnalysis, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IamPolicyAnalysis message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IamPolicyAnalysis.verify|verify} messages.
                         * @param message IamPolicyAnalysis message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IIamPolicyAnalysis, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IamPolicyAnalysis message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IamPolicyAnalysis
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IamPolicyAnalysis;

                        /**
                         * Decodes an IamPolicyAnalysis message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IamPolicyAnalysis
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IamPolicyAnalysis;

                        /**
                         * Verifies an IamPolicyAnalysis message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IamPolicyAnalysis message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IamPolicyAnalysis
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IamPolicyAnalysis;

                        /**
                         * Creates a plain object from an IamPolicyAnalysis message. Also converts values to other types if specified.
                         * @param message IamPolicyAnalysis
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.AnalyzeIamPolicyResponse.IamPolicyAnalysis, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IamPolicyAnalysis to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an IamPolicyAnalysisOutputConfig. */
                interface IIamPolicyAnalysisOutputConfig {

                    /** IamPolicyAnalysisOutputConfig gcsDestination */
                    gcsDestination?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.IGcsDestination|null);
                }

                /** Represents an IamPolicyAnalysisOutputConfig. */
                class IamPolicyAnalysisOutputConfig implements IIamPolicyAnalysisOutputConfig {

                    /**
                     * Constructs a new IamPolicyAnalysisOutputConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p4beta1.IIamPolicyAnalysisOutputConfig);

                    /** IamPolicyAnalysisOutputConfig gcsDestination. */
                    public gcsDestination?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.IGcsDestination|null);

                    /** IamPolicyAnalysisOutputConfig destination. */
                    public destination?: "gcsDestination";

                    /**
                     * Creates a new IamPolicyAnalysisOutputConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IamPolicyAnalysisOutputConfig instance
                     */
                    public static create(properties?: google.cloud.asset.v1p4beta1.IIamPolicyAnalysisOutputConfig): google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig;

                    /**
                     * Encodes the specified IamPolicyAnalysisOutputConfig message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.verify|verify} messages.
                     * @param message IamPolicyAnalysisOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p4beta1.IIamPolicyAnalysisOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IamPolicyAnalysisOutputConfig message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.verify|verify} messages.
                     * @param message IamPolicyAnalysisOutputConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IIamPolicyAnalysisOutputConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IamPolicyAnalysisOutputConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IamPolicyAnalysisOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig;

                    /**
                     * Decodes an IamPolicyAnalysisOutputConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IamPolicyAnalysisOutputConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig;

                    /**
                     * Verifies an IamPolicyAnalysisOutputConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IamPolicyAnalysisOutputConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IamPolicyAnalysisOutputConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig;

                    /**
                     * Creates a plain object from an IamPolicyAnalysisOutputConfig message. Also converts values to other types if specified.
                     * @param message IamPolicyAnalysisOutputConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IamPolicyAnalysisOutputConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace IamPolicyAnalysisOutputConfig {

                    /** Properties of a GcsDestination. */
                    interface IGcsDestination {

                        /** GcsDestination uri */
                        uri?: (string|null);
                    }

                    /** Represents a GcsDestination. */
                    class GcsDestination implements IGcsDestination {

                        /**
                         * Constructs a new GcsDestination.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.IGcsDestination);

                        /** GcsDestination uri. */
                        public uri: string;

                        /**
                         * Creates a new GcsDestination instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GcsDestination instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.IGcsDestination): google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.GcsDestination;

                        /**
                         * Encodes the specified GcsDestination message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.GcsDestination.verify|verify} messages.
                         * @param message GcsDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GcsDestination message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.GcsDestination.verify|verify} messages.
                         * @param message GcsDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.IGcsDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GcsDestination message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GcsDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.GcsDestination;

                        /**
                         * Decodes a GcsDestination message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GcsDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.GcsDestination;

                        /**
                         * Verifies a GcsDestination message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GcsDestination message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GcsDestination
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.GcsDestination;

                        /**
                         * Creates a plain object from a GcsDestination message. Also converts values to other types if specified.
                         * @param message GcsDestination
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisOutputConfig.GcsDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GcsDestination to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an ExportIamPolicyAnalysisRequest. */
                interface IExportIamPolicyAnalysisRequest {

                    /** ExportIamPolicyAnalysisRequest analysisQuery */
                    analysisQuery?: (google.cloud.asset.v1p4beta1.IIamPolicyAnalysisQuery|null);

                    /** ExportIamPolicyAnalysisRequest options */
                    options?: (google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.IOptions|null);

                    /** ExportIamPolicyAnalysisRequest outputConfig */
                    outputConfig?: (google.cloud.asset.v1p4beta1.IIamPolicyAnalysisOutputConfig|null);
                }

                /** Represents an ExportIamPolicyAnalysisRequest. */
                class ExportIamPolicyAnalysisRequest implements IExportIamPolicyAnalysisRequest {

                    /**
                     * Constructs a new ExportIamPolicyAnalysisRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest);

                    /** ExportIamPolicyAnalysisRequest analysisQuery. */
                    public analysisQuery?: (google.cloud.asset.v1p4beta1.IIamPolicyAnalysisQuery|null);

                    /** ExportIamPolicyAnalysisRequest options. */
                    public options?: (google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.IOptions|null);

                    /** ExportIamPolicyAnalysisRequest outputConfig. */
                    public outputConfig?: (google.cloud.asset.v1p4beta1.IIamPolicyAnalysisOutputConfig|null);

                    /**
                     * Creates a new ExportIamPolicyAnalysisRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportIamPolicyAnalysisRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest): google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest;

                    /**
                     * Encodes the specified ExportIamPolicyAnalysisRequest message. Does not implicitly {@link google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.verify|verify} messages.
                     * @param message ExportIamPolicyAnalysisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportIamPolicyAnalysisRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.verify|verify} messages.
                     * @param message ExportIamPolicyAnalysisRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportIamPolicyAnalysisRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportIamPolicyAnalysisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest;

                    /**
                     * Decodes an ExportIamPolicyAnalysisRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportIamPolicyAnalysisRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest;

                    /**
                     * Verifies an ExportIamPolicyAnalysisRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportIamPolicyAnalysisRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportIamPolicyAnalysisRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest;

                    /**
                     * Creates a plain object from an ExportIamPolicyAnalysisRequest message. Also converts values to other types if specified.
                     * @param message ExportIamPolicyAnalysisRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportIamPolicyAnalysisRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ExportIamPolicyAnalysisRequest {

                    /** Properties of an Options. */
                    interface IOptions {

                        /** Options expandGroups */
                        expandGroups?: (boolean|null);

                        /** Options expandRoles */
                        expandRoles?: (boolean|null);

                        /** Options expandResources */
                        expandResources?: (boolean|null);

                        /** Options outputResourceEdges */
                        outputResourceEdges?: (boolean|null);

                        /** Options outputGroupEdges */
                        outputGroupEdges?: (boolean|null);

                        /** Options analyzeServiceAccountImpersonation */
                        analyzeServiceAccountImpersonation?: (boolean|null);
                    }

                    /** Represents an Options. */
                    class Options implements IOptions {

                        /**
                         * Constructs a new Options.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.IOptions);

                        /** Options expandGroups. */
                        public expandGroups: boolean;

                        /** Options expandRoles. */
                        public expandRoles: boolean;

                        /** Options expandResources. */
                        public expandResources: boolean;

                        /** Options outputResourceEdges. */
                        public outputResourceEdges: boolean;

                        /** Options outputGroupEdges. */
                        public outputGroupEdges: boolean;

                        /** Options analyzeServiceAccountImpersonation. */
                        public analyzeServiceAccountImpersonation: boolean;

                        /**
                         * Creates a new Options instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Options instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.IOptions): google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.Options;

                        /**
                         * Encodes the specified Options message. Does not implicitly {@link google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.Options.verify|verify} messages.
                         * @param message Options message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Options message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.Options.verify|verify} messages.
                         * @param message Options message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.IOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Options message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Options
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.Options;

                        /**
                         * Decodes an Options message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Options
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.Options;

                        /**
                         * Verifies an Options message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Options message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Options
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.Options;

                        /**
                         * Creates a plain object from an Options message. Also converts values to other types if specified.
                         * @param message Options
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisRequest.Options, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Options to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of an ExportIamPolicyAnalysisResponse. */
                interface IExportIamPolicyAnalysisResponse {

                    /** ExportIamPolicyAnalysisResponse outputConfig */
                    outputConfig?: (google.cloud.asset.v1p4beta1.IIamPolicyAnalysisOutputConfig|null);
                }

                /** Represents an ExportIamPolicyAnalysisResponse. */
                class ExportIamPolicyAnalysisResponse implements IExportIamPolicyAnalysisResponse {

                    /**
                     * Constructs a new ExportIamPolicyAnalysisResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse);

                    /** ExportIamPolicyAnalysisResponse outputConfig. */
                    public outputConfig?: (google.cloud.asset.v1p4beta1.IIamPolicyAnalysisOutputConfig|null);

                    /**
                     * Creates a new ExportIamPolicyAnalysisResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ExportIamPolicyAnalysisResponse instance
                     */
                    public static create(properties?: google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse): google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisResponse;

                    /**
                     * Encodes the specified ExportIamPolicyAnalysisResponse message. Does not implicitly {@link google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisResponse.verify|verify} messages.
                     * @param message ExportIamPolicyAnalysisResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ExportIamPolicyAnalysisResponse message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisResponse.verify|verify} messages.
                     * @param message ExportIamPolicyAnalysisResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IExportIamPolicyAnalysisResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an ExportIamPolicyAnalysisResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ExportIamPolicyAnalysisResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisResponse;

                    /**
                     * Decodes an ExportIamPolicyAnalysisResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ExportIamPolicyAnalysisResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisResponse;

                    /**
                     * Verifies an ExportIamPolicyAnalysisResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an ExportIamPolicyAnalysisResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ExportIamPolicyAnalysisResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisResponse;

                    /**
                     * Creates a plain object from an ExportIamPolicyAnalysisResponse message. Also converts values to other types if specified.
                     * @param message ExportIamPolicyAnalysisResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p4beta1.ExportIamPolicyAnalysisResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ExportIamPolicyAnalysisResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an IamPolicyAnalysisResult. */
                interface IIamPolicyAnalysisResult {

                    /** IamPolicyAnalysisResult attachedResourceFullName */
                    attachedResourceFullName?: (string|null);

                    /** IamPolicyAnalysisResult iamBinding */
                    iamBinding?: (google.iam.v1.IBinding|null);

                    /** IamPolicyAnalysisResult accessControlLists */
                    accessControlLists?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAccessControlList[]|null);

                    /** IamPolicyAnalysisResult identityList */
                    identityList?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IIdentityList|null);

                    /** IamPolicyAnalysisResult fullyExplored */
                    fullyExplored?: (boolean|null);
                }

                /** Represents an IamPolicyAnalysisResult. */
                class IamPolicyAnalysisResult implements IIamPolicyAnalysisResult {

                    /**
                     * Constructs a new IamPolicyAnalysisResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p4beta1.IIamPolicyAnalysisResult);

                    /** IamPolicyAnalysisResult attachedResourceFullName. */
                    public attachedResourceFullName: string;

                    /** IamPolicyAnalysisResult iamBinding. */
                    public iamBinding?: (google.iam.v1.IBinding|null);

                    /** IamPolicyAnalysisResult accessControlLists. */
                    public accessControlLists: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAccessControlList[];

                    /** IamPolicyAnalysisResult identityList. */
                    public identityList?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IIdentityList|null);

                    /** IamPolicyAnalysisResult fullyExplored. */
                    public fullyExplored: boolean;

                    /**
                     * Creates a new IamPolicyAnalysisResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns IamPolicyAnalysisResult instance
                     */
                    public static create(properties?: google.cloud.asset.v1p4beta1.IIamPolicyAnalysisResult): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult;

                    /**
                     * Encodes the specified IamPolicyAnalysisResult message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.verify|verify} messages.
                     * @param message IamPolicyAnalysisResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p4beta1.IIamPolicyAnalysisResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified IamPolicyAnalysisResult message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.verify|verify} messages.
                     * @param message IamPolicyAnalysisResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IIamPolicyAnalysisResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an IamPolicyAnalysisResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns IamPolicyAnalysisResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult;

                    /**
                     * Decodes an IamPolicyAnalysisResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns IamPolicyAnalysisResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult;

                    /**
                     * Verifies an IamPolicyAnalysisResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an IamPolicyAnalysisResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns IamPolicyAnalysisResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult;

                    /**
                     * Creates a plain object from an IamPolicyAnalysisResult message. Also converts values to other types if specified.
                     * @param message IamPolicyAnalysisResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this IamPolicyAnalysisResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace IamPolicyAnalysisResult {

                    /** Properties of an AnalysisState. */
                    interface IAnalysisState {

                        /** AnalysisState code */
                        code?: (google.rpc.Code|keyof typeof google.rpc.Code|null);

                        /** AnalysisState cause */
                        cause?: (string|null);
                    }

                    /** Represents an AnalysisState. */
                    class AnalysisState implements IAnalysisState {

                        /**
                         * Constructs a new AnalysisState.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAnalysisState);

                        /** AnalysisState code. */
                        public code: (google.rpc.Code|keyof typeof google.rpc.Code);

                        /** AnalysisState cause. */
                        public cause: string;

                        /**
                         * Creates a new AnalysisState instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AnalysisState instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAnalysisState): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AnalysisState;

                        /**
                         * Encodes the specified AnalysisState message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AnalysisState.verify|verify} messages.
                         * @param message AnalysisState message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAnalysisState, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AnalysisState message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AnalysisState.verify|verify} messages.
                         * @param message AnalysisState message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAnalysisState, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AnalysisState message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AnalysisState
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AnalysisState;

                        /**
                         * Decodes an AnalysisState message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AnalysisState
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AnalysisState;

                        /**
                         * Verifies an AnalysisState message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AnalysisState message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AnalysisState
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AnalysisState;

                        /**
                         * Creates a plain object from an AnalysisState message. Also converts values to other types if specified.
                         * @param message AnalysisState
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AnalysisState, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AnalysisState to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a Resource. */
                    interface IResource {

                        /** Resource fullResourceName */
                        fullResourceName?: (string|null);

                        /** Resource analysisState */
                        analysisState?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAnalysisState|null);
                    }

                    /** Represents a Resource. */
                    class Resource implements IResource {

                        /**
                         * Constructs a new Resource.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IResource);

                        /** Resource fullResourceName. */
                        public fullResourceName: string;

                        /** Resource analysisState. */
                        public analysisState?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAnalysisState|null);

                        /**
                         * Creates a new Resource instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Resource instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IResource): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Resource;

                        /**
                         * Encodes the specified Resource message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Resource.verify|verify} messages.
                         * @param message Resource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Resource message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Resource.verify|verify} messages.
                         * @param message Resource message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Resource message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Resource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Resource;

                        /**
                         * Decodes a Resource message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Resource
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Resource;

                        /**
                         * Verifies a Resource message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Resource message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Resource
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Resource;

                        /**
                         * Creates a plain object from a Resource message. Also converts values to other types if specified.
                         * @param message Resource
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Resource to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Access. */
                    interface IAccess {

                        /** Access role */
                        role?: (string|null);

                        /** Access permission */
                        permission?: (string|null);

                        /** Access analysisState */
                        analysisState?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAnalysisState|null);
                    }

                    /** Represents an Access. */
                    class Access implements IAccess {

                        /**
                         * Constructs a new Access.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAccess);

                        /** Access role. */
                        public role: string;

                        /** Access permission. */
                        public permission: string;

                        /** Access analysisState. */
                        public analysisState?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAnalysisState|null);

                        /** Access oneofAccess. */
                        public oneofAccess?: ("role"|"permission");

                        /**
                         * Creates a new Access instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Access instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAccess): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Access;

                        /**
                         * Encodes the specified Access message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Access.verify|verify} messages.
                         * @param message Access message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAccess, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Access message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Access.verify|verify} messages.
                         * @param message Access message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAccess, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Access message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Access
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Access;

                        /**
                         * Decodes an Access message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Access
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Access;

                        /**
                         * Verifies an Access message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Access message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Access
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Access;

                        /**
                         * Creates a plain object from an Access message. Also converts values to other types if specified.
                         * @param message Access
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Access, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Access to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Edge. */
                    interface IEdge {

                        /** Edge sourceNode */
                        sourceNode?: (string|null);

                        /** Edge targetNode */
                        targetNode?: (string|null);
                    }

                    /** Represents an Edge. */
                    class Edge implements IEdge {

                        /**
                         * Constructs a new Edge.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IEdge);

                        /** Edge sourceNode. */
                        public sourceNode: string;

                        /** Edge targetNode. */
                        public targetNode: string;

                        /**
                         * Creates a new Edge instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Edge instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IEdge): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Edge;

                        /**
                         * Encodes the specified Edge message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Edge.verify|verify} messages.
                         * @param message Edge message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IEdge, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Edge message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Edge.verify|verify} messages.
                         * @param message Edge message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IEdge, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Edge message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Edge
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Edge;

                        /**
                         * Decodes an Edge message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Edge
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Edge;

                        /**
                         * Verifies an Edge message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Edge message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Edge
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Edge;

                        /**
                         * Creates a plain object from an Edge message. Also converts values to other types if specified.
                         * @param message Edge
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Edge, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Edge to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an Identity. */
                    interface IIdentity {

                        /** Identity name */
                        name?: (string|null);

                        /** Identity analysisState */
                        analysisState?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAnalysisState|null);
                    }

                    /** Represents an Identity. */
                    class Identity implements IIdentity {

                        /**
                         * Constructs a new Identity.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IIdentity);

                        /** Identity name. */
                        public name: string;

                        /** Identity analysisState. */
                        public analysisState?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAnalysisState|null);

                        /**
                         * Creates a new Identity instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Identity instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IIdentity): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Identity;

                        /**
                         * Encodes the specified Identity message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Identity.verify|verify} messages.
                         * @param message Identity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Identity message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Identity.verify|verify} messages.
                         * @param message Identity message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IIdentity, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Identity message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Identity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Identity;

                        /**
                         * Decodes an Identity message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Identity
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Identity;

                        /**
                         * Verifies an Identity message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Identity message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Identity
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Identity;

                        /**
                         * Creates a plain object from an Identity message. Also converts values to other types if specified.
                         * @param message Identity
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.Identity, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Identity to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an AccessControlList. */
                    interface IAccessControlList {

                        /** AccessControlList resources */
                        resources?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IResource[]|null);

                        /** AccessControlList accesses */
                        accesses?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAccess[]|null);

                        /** AccessControlList resourceEdges */
                        resourceEdges?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IEdge[]|null);
                    }

                    /** Represents an AccessControlList. */
                    class AccessControlList implements IAccessControlList {

                        /**
                         * Constructs a new AccessControlList.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAccessControlList);

                        /** AccessControlList resources. */
                        public resources: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IResource[];

                        /** AccessControlList accesses. */
                        public accesses: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAccess[];

                        /** AccessControlList resourceEdges. */
                        public resourceEdges: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IEdge[];

                        /**
                         * Creates a new AccessControlList instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AccessControlList instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAccessControlList): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AccessControlList;

                        /**
                         * Encodes the specified AccessControlList message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AccessControlList.verify|verify} messages.
                         * @param message AccessControlList message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAccessControlList, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AccessControlList message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AccessControlList.verify|verify} messages.
                         * @param message AccessControlList message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IAccessControlList, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AccessControlList message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AccessControlList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AccessControlList;

                        /**
                         * Decodes an AccessControlList message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AccessControlList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AccessControlList;

                        /**
                         * Verifies an AccessControlList message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AccessControlList message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AccessControlList
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AccessControlList;

                        /**
                         * Creates a plain object from an AccessControlList message. Also converts values to other types if specified.
                         * @param message AccessControlList
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.AccessControlList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AccessControlList to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an IdentityList. */
                    interface IIdentityList {

                        /** IdentityList identities */
                        identities?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IIdentity[]|null);

                        /** IdentityList groupEdges */
                        groupEdges?: (google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IEdge[]|null);
                    }

                    /** Represents an IdentityList. */
                    class IdentityList implements IIdentityList {

                        /**
                         * Constructs a new IdentityList.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IIdentityList);

                        /** IdentityList identities. */
                        public identities: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IIdentity[];

                        /** IdentityList groupEdges. */
                        public groupEdges: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IEdge[];

                        /**
                         * Creates a new IdentityList instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IdentityList instance
                         */
                        public static create(properties?: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IIdentityList): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IdentityList;

                        /**
                         * Encodes the specified IdentityList message. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IdentityList.verify|verify} messages.
                         * @param message IdentityList message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IIdentityList, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IdentityList message, length delimited. Does not implicitly {@link google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IdentityList.verify|verify} messages.
                         * @param message IdentityList message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IIdentityList, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IdentityList message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IdentityList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IdentityList;

                        /**
                         * Decodes an IdentityList message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IdentityList
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IdentityList;

                        /**
                         * Verifies an IdentityList message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IdentityList message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IdentityList
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IdentityList;

                        /**
                         * Creates a plain object from an IdentityList message. Also converts values to other types if specified.
                         * @param message IdentityList
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.asset.v1p4beta1.IamPolicyAnalysisResult.IdentityList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IdentityList to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace v1p5beta1. */
            namespace v1p5beta1 {

                /** Represents an AssetService */
                class AssetService extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new AssetService service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new AssetService service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AssetService;

                    /**
                     * Calls ListAssets.
                     * @param request ListAssetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAssetsResponse
                     */
                    public listAssets(request: google.cloud.asset.v1p5beta1.IListAssetsRequest, callback: google.cloud.asset.v1p5beta1.AssetService.ListAssetsCallback): void;

                    /**
                     * Calls ListAssets.
                     * @param request ListAssetsRequest message or plain object
                     * @returns Promise
                     */
                    public listAssets(request: google.cloud.asset.v1p5beta1.IListAssetsRequest): Promise<google.cloud.asset.v1p5beta1.ListAssetsResponse>;
                }

                namespace AssetService {

                    /**
                     * Callback as used by {@link google.cloud.asset.v1p5beta1.AssetService#listAssets}.
                     * @param error Error, if any
                     * @param [response] ListAssetsResponse
                     */
                    type ListAssetsCallback = (error: (Error|null), response?: google.cloud.asset.v1p5beta1.ListAssetsResponse) => void;
                }

                /** Properties of a ListAssetsRequest. */
                interface IListAssetsRequest {

                    /** ListAssetsRequest parent */
                    parent?: (string|null);

                    /** ListAssetsRequest readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ListAssetsRequest assetTypes */
                    assetTypes?: (string[]|null);

                    /** ListAssetsRequest contentType */
                    contentType?: (google.cloud.asset.v1p5beta1.ContentType|keyof typeof google.cloud.asset.v1p5beta1.ContentType|null);

                    /** ListAssetsRequest pageSize */
                    pageSize?: (number|null);

                    /** ListAssetsRequest pageToken */
                    pageToken?: (string|null);
                }

                /** Represents a ListAssetsRequest. */
                class ListAssetsRequest implements IListAssetsRequest {

                    /**
                     * Constructs a new ListAssetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p5beta1.IListAssetsRequest);

                    /** ListAssetsRequest parent. */
                    public parent: string;

                    /** ListAssetsRequest readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ListAssetsRequest assetTypes. */
                    public assetTypes: string[];

                    /** ListAssetsRequest contentType. */
                    public contentType: (google.cloud.asset.v1p5beta1.ContentType|keyof typeof google.cloud.asset.v1p5beta1.ContentType);

                    /** ListAssetsRequest pageSize. */
                    public pageSize: number;

                    /** ListAssetsRequest pageToken. */
                    public pageToken: string;

                    /**
                     * Creates a new ListAssetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAssetsRequest instance
                     */
                    public static create(properties?: google.cloud.asset.v1p5beta1.IListAssetsRequest): google.cloud.asset.v1p5beta1.ListAssetsRequest;

                    /**
                     * Encodes the specified ListAssetsRequest message. Does not implicitly {@link google.cloud.asset.v1p5beta1.ListAssetsRequest.verify|verify} messages.
                     * @param message ListAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p5beta1.IListAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAssetsRequest message, length delimited. Does not implicitly {@link google.cloud.asset.v1p5beta1.ListAssetsRequest.verify|verify} messages.
                     * @param message ListAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p5beta1.IListAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAssetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p5beta1.ListAssetsRequest;

                    /**
                     * Decodes a ListAssetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p5beta1.ListAssetsRequest;

                    /**
                     * Verifies a ListAssetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAssetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAssetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p5beta1.ListAssetsRequest;

                    /**
                     * Creates a plain object from a ListAssetsRequest message. Also converts values to other types if specified.
                     * @param message ListAssetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p5beta1.ListAssetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAssetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** ContentType enum. */
                enum ContentType {
                    CONTENT_TYPE_UNSPECIFIED = 0,
                    RESOURCE = 1,
                    IAM_POLICY = 2,
                    ORG_POLICY = 4,
                    ACCESS_POLICY = 5
                }

                /** Properties of a ListAssetsResponse. */
                interface IListAssetsResponse {

                    /** ListAssetsResponse readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ListAssetsResponse assets */
                    assets?: (google.cloud.asset.v1p5beta1.IAsset[]|null);

                    /** ListAssetsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListAssetsResponse. */
                class ListAssetsResponse implements IListAssetsResponse {

                    /**
                     * Constructs a new ListAssetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p5beta1.IListAssetsResponse);

                    /** ListAssetsResponse readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ListAssetsResponse assets. */
                    public assets: google.cloud.asset.v1p5beta1.IAsset[];

                    /** ListAssetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListAssetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAssetsResponse instance
                     */
                    public static create(properties?: google.cloud.asset.v1p5beta1.IListAssetsResponse): google.cloud.asset.v1p5beta1.ListAssetsResponse;

                    /**
                     * Encodes the specified ListAssetsResponse message. Does not implicitly {@link google.cloud.asset.v1p5beta1.ListAssetsResponse.verify|verify} messages.
                     * @param message ListAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p5beta1.IListAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAssetsResponse message, length delimited. Does not implicitly {@link google.cloud.asset.v1p5beta1.ListAssetsResponse.verify|verify} messages.
                     * @param message ListAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p5beta1.IListAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAssetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p5beta1.ListAssetsResponse;

                    /**
                     * Decodes a ListAssetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p5beta1.ListAssetsResponse;

                    /**
                     * Verifies a ListAssetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAssetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAssetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p5beta1.ListAssetsResponse;

                    /**
                     * Creates a plain object from a ListAssetsResponse message. Also converts values to other types if specified.
                     * @param message ListAssetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p5beta1.ListAssetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAssetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Asset. */
                interface IAsset {

                    /** Asset name */
                    name?: (string|null);

                    /** Asset assetType */
                    assetType?: (string|null);

                    /** Asset resource */
                    resource?: (google.cloud.asset.v1p5beta1.IResource|null);

                    /** Asset iamPolicy */
                    iamPolicy?: (google.iam.v1.IPolicy|null);

                    /** Asset orgPolicy */
                    orgPolicy?: (google.cloud.orgpolicy.v1.IPolicy[]|null);

                    /** Asset accessPolicy */
                    accessPolicy?: (google.identity.accesscontextmanager.v1.IAccessPolicy|null);

                    /** Asset accessLevel */
                    accessLevel?: (google.identity.accesscontextmanager.v1.IAccessLevel|null);

                    /** Asset servicePerimeter */
                    servicePerimeter?: (google.identity.accesscontextmanager.v1.IServicePerimeter|null);

                    /** Asset ancestors */
                    ancestors?: (string[]|null);
                }

                /** Represents an Asset. */
                class Asset implements IAsset {

                    /**
                     * Constructs a new Asset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p5beta1.IAsset);

                    /** Asset name. */
                    public name: string;

                    /** Asset assetType. */
                    public assetType: string;

                    /** Asset resource. */
                    public resource?: (google.cloud.asset.v1p5beta1.IResource|null);

                    /** Asset iamPolicy. */
                    public iamPolicy?: (google.iam.v1.IPolicy|null);

                    /** Asset orgPolicy. */
                    public orgPolicy: google.cloud.orgpolicy.v1.IPolicy[];

                    /** Asset accessPolicy. */
                    public accessPolicy?: (google.identity.accesscontextmanager.v1.IAccessPolicy|null);

                    /** Asset accessLevel. */
                    public accessLevel?: (google.identity.accesscontextmanager.v1.IAccessLevel|null);

                    /** Asset servicePerimeter. */
                    public servicePerimeter?: (google.identity.accesscontextmanager.v1.IServicePerimeter|null);

                    /** Asset ancestors. */
                    public ancestors: string[];

                    /** Asset accessContextPolicy. */
                    public accessContextPolicy?: ("accessPolicy"|"accessLevel"|"servicePerimeter");

                    /**
                     * Creates a new Asset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Asset instance
                     */
                    public static create(properties?: google.cloud.asset.v1p5beta1.IAsset): google.cloud.asset.v1p5beta1.Asset;

                    /**
                     * Encodes the specified Asset message. Does not implicitly {@link google.cloud.asset.v1p5beta1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p5beta1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Asset message, length delimited. Does not implicitly {@link google.cloud.asset.v1p5beta1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p5beta1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Asset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p5beta1.Asset;

                    /**
                     * Decodes an Asset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p5beta1.Asset;

                    /**
                     * Verifies an Asset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Asset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Asset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p5beta1.Asset;

                    /**
                     * Creates a plain object from an Asset message. Also converts values to other types if specified.
                     * @param message Asset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p5beta1.Asset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Asset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Resource. */
                interface IResource {

                    /** Resource version */
                    version?: (string|null);

                    /** Resource discoveryDocumentUri */
                    discoveryDocumentUri?: (string|null);

                    /** Resource discoveryName */
                    discoveryName?: (string|null);

                    /** Resource resourceUrl */
                    resourceUrl?: (string|null);

                    /** Resource parent */
                    parent?: (string|null);

                    /** Resource data */
                    data?: (google.protobuf.IStruct|null);
                }

                /** Represents a Resource. */
                class Resource implements IResource {

                    /**
                     * Constructs a new Resource.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.asset.v1p5beta1.IResource);

                    /** Resource version. */
                    public version: string;

                    /** Resource discoveryDocumentUri. */
                    public discoveryDocumentUri: string;

                    /** Resource discoveryName. */
                    public discoveryName: string;

                    /** Resource resourceUrl. */
                    public resourceUrl: string;

                    /** Resource parent. */
                    public parent: string;

                    /** Resource data. */
                    public data?: (google.protobuf.IStruct|null);

                    /**
                     * Creates a new Resource instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Resource instance
                     */
                    public static create(properties?: google.cloud.asset.v1p5beta1.IResource): google.cloud.asset.v1p5beta1.Resource;

                    /**
                     * Encodes the specified Resource message. Does not implicitly {@link google.cloud.asset.v1p5beta1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.asset.v1p5beta1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Resource message, length delimited. Does not implicitly {@link google.cloud.asset.v1p5beta1.Resource.verify|verify} messages.
                     * @param message Resource message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.asset.v1p5beta1.IResource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Resource message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.asset.v1p5beta1.Resource;

                    /**
                     * Decodes a Resource message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Resource
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.asset.v1p5beta1.Resource;

                    /**
                     * Verifies a Resource message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Resource message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Resource
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.asset.v1p5beta1.Resource;

                    /**
                     * Creates a plain object from a Resource message. Also converts values to other types if specified.
                     * @param message Resource
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.asset.v1p5beta1.Resource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Resource to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }

        /** Namespace orgpolicy. */
        namespace orgpolicy {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of a Policy. */
                interface IPolicy {

                    /** Policy version */
                    version?: (number|null);

                    /** Policy constraint */
                    constraint?: (string|null);

                    /** Policy etag */
                    etag?: (Uint8Array|string|null);

                    /** Policy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Policy listPolicy */
                    listPolicy?: (google.cloud.orgpolicy.v1.Policy.IListPolicy|null);

                    /** Policy booleanPolicy */
                    booleanPolicy?: (google.cloud.orgpolicy.v1.Policy.IBooleanPolicy|null);

                    /** Policy restoreDefault */
                    restoreDefault?: (google.cloud.orgpolicy.v1.Policy.IRestoreDefault|null);
                }

                /** Represents a Policy. */
                class Policy implements IPolicy {

                    /**
                     * Constructs a new Policy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.orgpolicy.v1.IPolicy);

                    /** Policy version. */
                    public version: number;

                    /** Policy constraint. */
                    public constraint: string;

                    /** Policy etag. */
                    public etag: (Uint8Array|string);

                    /** Policy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Policy listPolicy. */
                    public listPolicy?: (google.cloud.orgpolicy.v1.Policy.IListPolicy|null);

                    /** Policy booleanPolicy. */
                    public booleanPolicy?: (google.cloud.orgpolicy.v1.Policy.IBooleanPolicy|null);

                    /** Policy restoreDefault. */
                    public restoreDefault?: (google.cloud.orgpolicy.v1.Policy.IRestoreDefault|null);

                    /** Policy policyType. */
                    public policyType?: ("listPolicy"|"booleanPolicy"|"restoreDefault");

                    /**
                     * Creates a new Policy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Policy instance
                     */
                    public static create(properties?: google.cloud.orgpolicy.v1.IPolicy): google.cloud.orgpolicy.v1.Policy;

                    /**
                     * Encodes the specified Policy message. Does not implicitly {@link google.cloud.orgpolicy.v1.Policy.verify|verify} messages.
                     * @param message Policy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.orgpolicy.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v1.Policy.verify|verify} messages.
                     * @param message Policy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.orgpolicy.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Policy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Policy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v1.Policy;

                    /**
                     * Decodes a Policy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Policy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v1.Policy;

                    /**
                     * Verifies a Policy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Policy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Policy
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v1.Policy;

                    /**
                     * Creates a plain object from a Policy message. Also converts values to other types if specified.
                     * @param message Policy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.orgpolicy.v1.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Policy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Policy {

                    /** Properties of a ListPolicy. */
                    interface IListPolicy {

                        /** ListPolicy allowedValues */
                        allowedValues?: (string[]|null);

                        /** ListPolicy deniedValues */
                        deniedValues?: (string[]|null);

                        /** ListPolicy allValues */
                        allValues?: (google.cloud.orgpolicy.v1.Policy.ListPolicy.AllValues|keyof typeof google.cloud.orgpolicy.v1.Policy.ListPolicy.AllValues|null);

                        /** ListPolicy suggestedValue */
                        suggestedValue?: (string|null);

                        /** ListPolicy inheritFromParent */
                        inheritFromParent?: (boolean|null);
                    }

                    /** Represents a ListPolicy. */
                    class ListPolicy implements IListPolicy {

                        /**
                         * Constructs a new ListPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.orgpolicy.v1.Policy.IListPolicy);

                        /** ListPolicy allowedValues. */
                        public allowedValues: string[];

                        /** ListPolicy deniedValues. */
                        public deniedValues: string[];

                        /** ListPolicy allValues. */
                        public allValues: (google.cloud.orgpolicy.v1.Policy.ListPolicy.AllValues|keyof typeof google.cloud.orgpolicy.v1.Policy.ListPolicy.AllValues);

                        /** ListPolicy suggestedValue. */
                        public suggestedValue: string;

                        /** ListPolicy inheritFromParent. */
                        public inheritFromParent: boolean;

                        /**
                         * Creates a new ListPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListPolicy instance
                         */
                        public static create(properties?: google.cloud.orgpolicy.v1.Policy.IListPolicy): google.cloud.orgpolicy.v1.Policy.ListPolicy;

                        /**
                         * Encodes the specified ListPolicy message. Does not implicitly {@link google.cloud.orgpolicy.v1.Policy.ListPolicy.verify|verify} messages.
                         * @param message ListPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.orgpolicy.v1.Policy.IListPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListPolicy message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v1.Policy.ListPolicy.verify|verify} messages.
                         * @param message ListPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.orgpolicy.v1.Policy.IListPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v1.Policy.ListPolicy;

                        /**
                         * Decodes a ListPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v1.Policy.ListPolicy;

                        /**
                         * Verifies a ListPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v1.Policy.ListPolicy;

                        /**
                         * Creates a plain object from a ListPolicy message. Also converts values to other types if specified.
                         * @param message ListPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.orgpolicy.v1.Policy.ListPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace ListPolicy {

                        /** AllValues enum. */
                        enum AllValues {
                            ALL_VALUES_UNSPECIFIED = 0,
                            ALLOW = 1,
                            DENY = 2
                        }
                    }

                    /** Properties of a BooleanPolicy. */
                    interface IBooleanPolicy {

                        /** BooleanPolicy enforced */
                        enforced?: (boolean|null);
                    }

                    /** Represents a BooleanPolicy. */
                    class BooleanPolicy implements IBooleanPolicy {

                        /**
                         * Constructs a new BooleanPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.orgpolicy.v1.Policy.IBooleanPolicy);

                        /** BooleanPolicy enforced. */
                        public enforced: boolean;

                        /**
                         * Creates a new BooleanPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns BooleanPolicy instance
                         */
                        public static create(properties?: google.cloud.orgpolicy.v1.Policy.IBooleanPolicy): google.cloud.orgpolicy.v1.Policy.BooleanPolicy;

                        /**
                         * Encodes the specified BooleanPolicy message. Does not implicitly {@link google.cloud.orgpolicy.v1.Policy.BooleanPolicy.verify|verify} messages.
                         * @param message BooleanPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.orgpolicy.v1.Policy.IBooleanPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified BooleanPolicy message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v1.Policy.BooleanPolicy.verify|verify} messages.
                         * @param message BooleanPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.orgpolicy.v1.Policy.IBooleanPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a BooleanPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns BooleanPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v1.Policy.BooleanPolicy;

                        /**
                         * Decodes a BooleanPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns BooleanPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v1.Policy.BooleanPolicy;

                        /**
                         * Verifies a BooleanPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a BooleanPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns BooleanPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v1.Policy.BooleanPolicy;

                        /**
                         * Creates a plain object from a BooleanPolicy message. Also converts values to other types if specified.
                         * @param message BooleanPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.orgpolicy.v1.Policy.BooleanPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this BooleanPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of a RestoreDefault. */
                    interface IRestoreDefault {
                    }

                    /** Represents a RestoreDefault. */
                    class RestoreDefault implements IRestoreDefault {

                        /**
                         * Constructs a new RestoreDefault.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.orgpolicy.v1.Policy.IRestoreDefault);

                        /**
                         * Creates a new RestoreDefault instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns RestoreDefault instance
                         */
                        public static create(properties?: google.cloud.orgpolicy.v1.Policy.IRestoreDefault): google.cloud.orgpolicy.v1.Policy.RestoreDefault;

                        /**
                         * Encodes the specified RestoreDefault message. Does not implicitly {@link google.cloud.orgpolicy.v1.Policy.RestoreDefault.verify|verify} messages.
                         * @param message RestoreDefault message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.orgpolicy.v1.Policy.IRestoreDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified RestoreDefault message, length delimited. Does not implicitly {@link google.cloud.orgpolicy.v1.Policy.RestoreDefault.verify|verify} messages.
                         * @param message RestoreDefault message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.orgpolicy.v1.Policy.IRestoreDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a RestoreDefault message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns RestoreDefault
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.orgpolicy.v1.Policy.RestoreDefault;

                        /**
                         * Decodes a RestoreDefault message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns RestoreDefault
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.orgpolicy.v1.Policy.RestoreDefault;

                        /**
                         * Verifies a RestoreDefault message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a RestoreDefault message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns RestoreDefault
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.orgpolicy.v1.Policy.RestoreDefault;

                        /**
                         * Creates a plain object from a RestoreDefault message. Also converts values to other types if specified.
                         * @param message RestoreDefault
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.orgpolicy.v1.Policy.RestoreDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this RestoreDefault to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue: (google.protobuf.NullValue|keyof typeof google.protobuf.NullValue);

            /** Value numberValue. */
            public numberValue: number;

            /** Value stringValue. */
            public stringValue: string;

            /** Value boolValue. */
            public boolValue: boolean;

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace iam. */
    namespace iam {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy version */
                version?: (number|null);

                /** Policy bindings */
                bindings?: (google.iam.v1.IBinding[]|null);

                /** Policy etag */
                etag?: (Uint8Array|string|null);
            }

            /** Represents a Policy. */
            class Policy implements IPolicy {

                /**
                 * Constructs a new Policy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicy);

                /** Policy version. */
                public version: number;

                /** Policy bindings. */
                public bindings: google.iam.v1.IBinding[];

                /** Policy etag. */
                public etag: (Uint8Array|string);

                /**
                 * Creates a new Policy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Policy instance
                 */
                public static create(properties?: google.iam.v1.IPolicy): google.iam.v1.Policy;

                /**
                 * Encodes the specified Policy message. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Policy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Policy;

                /**
                 * Decodes a Policy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Policy;

                /**
                 * Verifies a Policy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Policy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Policy
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Policy;

                /**
                 * Creates a plain object from a Policy message. Also converts values to other types if specified.
                 * @param message Policy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Policy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Binding. */
            interface IBinding {

                /** Binding role */
                role?: (string|null);

                /** Binding members */
                members?: (string[]|null);

                /** Binding condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a Binding. */
            class Binding implements IBinding {

                /**
                 * Constructs a new Binding.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBinding);

                /** Binding role. */
                public role: string;

                /** Binding members. */
                public members: string[];

                /** Binding condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new Binding instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Binding instance
                 */
                public static create(properties?: google.iam.v1.IBinding): google.iam.v1.Binding;

                /**
                 * Encodes the specified Binding message. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Binding message, length delimited. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Binding message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Binding;

                /**
                 * Decodes a Binding message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Binding;

                /**
                 * Verifies a Binding message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Binding message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Binding
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Binding;

                /**
                 * Creates a plain object from a Binding message. Also converts values to other types if specified.
                 * @param message Binding
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Binding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Binding to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PolicyDelta. */
            interface IPolicyDelta {

                /** PolicyDelta bindingDeltas */
                bindingDeltas?: (google.iam.v1.IBindingDelta[]|null);

                /** PolicyDelta auditConfigDeltas */
                auditConfigDeltas?: (google.iam.v1.IAuditConfigDelta[]|null);
            }

            /** Represents a PolicyDelta. */
            class PolicyDelta implements IPolicyDelta {

                /**
                 * Constructs a new PolicyDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicyDelta);

                /** PolicyDelta bindingDeltas. */
                public bindingDeltas: google.iam.v1.IBindingDelta[];

                /** PolicyDelta auditConfigDeltas. */
                public auditConfigDeltas: google.iam.v1.IAuditConfigDelta[];

                /**
                 * Creates a new PolicyDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyDelta instance
                 */
                public static create(properties?: google.iam.v1.IPolicyDelta): google.iam.v1.PolicyDelta;

                /**
                 * Encodes the specified PolicyDelta message. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyDelta message, length delimited. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.PolicyDelta;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.PolicyDelta;

                /**
                 * Verifies a PolicyDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.PolicyDelta;

                /**
                 * Creates a plain object from a PolicyDelta message. Also converts values to other types if specified.
                 * @param message PolicyDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.PolicyDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BindingDelta. */
            interface IBindingDelta {

                /** BindingDelta action */
                action?: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action|null);

                /** BindingDelta role */
                role?: (string|null);

                /** BindingDelta member */
                member?: (string|null);

                /** BindingDelta condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a BindingDelta. */
            class BindingDelta implements IBindingDelta {

                /**
                 * Constructs a new BindingDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBindingDelta);

                /** BindingDelta action. */
                public action: (google.iam.v1.BindingDelta.Action|keyof typeof google.iam.v1.BindingDelta.Action);

                /** BindingDelta role. */
                public role: string;

                /** BindingDelta member. */
                public member: string;

                /** BindingDelta condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new BindingDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BindingDelta instance
                 */
                public static create(properties?: google.iam.v1.IBindingDelta): google.iam.v1.BindingDelta;

                /**
                 * Encodes the specified BindingDelta message. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BindingDelta message, length delimited. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.BindingDelta;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.BindingDelta;

                /**
                 * Verifies a BindingDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BindingDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BindingDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.BindingDelta;

                /**
                 * Creates a plain object from a BindingDelta message. Also converts values to other types if specified.
                 * @param message BindingDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.BindingDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BindingDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace BindingDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }

            /** Properties of an AuditConfigDelta. */
            interface IAuditConfigDelta {

                /** AuditConfigDelta action */
                action?: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action|null);

                /** AuditConfigDelta service */
                service?: (string|null);

                /** AuditConfigDelta exemptedMember */
                exemptedMember?: (string|null);

                /** AuditConfigDelta logType */
                logType?: (string|null);
            }

            /** Represents an AuditConfigDelta. */
            class AuditConfigDelta implements IAuditConfigDelta {

                /**
                 * Constructs a new AuditConfigDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfigDelta);

                /** AuditConfigDelta action. */
                public action: (google.iam.v1.AuditConfigDelta.Action|keyof typeof google.iam.v1.AuditConfigDelta.Action);

                /** AuditConfigDelta service. */
                public service: string;

                /** AuditConfigDelta exemptedMember. */
                public exemptedMember: string;

                /** AuditConfigDelta logType. */
                public logType: string;

                /**
                 * Creates a new AuditConfigDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfigDelta instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfigDelta): google.iam.v1.AuditConfigDelta;

                /**
                 * Encodes the specified AuditConfigDelta message. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfigDelta message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfigDelta;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfigDelta;

                /**
                 * Verifies an AuditConfigDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfigDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfigDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfigDelta;

                /**
                 * Creates a plain object from an AuditConfigDelta message. Also converts values to other types if specified.
                 * @param message AuditConfigDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfigDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfigDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace AuditConfigDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of an Expr. */
        interface IExpr {

            /** Expr expression */
            expression?: (string|null);

            /** Expr title */
            title?: (string|null);

            /** Expr description */
            description?: (string|null);

            /** Expr location */
            location?: (string|null);
        }

        /** Represents an Expr. */
        class Expr implements IExpr {

            /**
             * Constructs a new Expr.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IExpr);

            /** Expr expression. */
            public expression: string;

            /** Expr title. */
            public title: string;

            /** Expr description. */
            public description: string;

            /** Expr location. */
            public location: string;

            /**
             * Creates a new Expr instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Expr instance
             */
            public static create(properties?: google.type.IExpr): google.type.Expr;

            /**
             * Encodes the specified Expr message. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Expr message, length delimited. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Expr message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Expr;

            /**
             * Decodes an Expr message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Expr;

            /**
             * Verifies an Expr message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Expr message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Expr
             */
            public static fromObject(object: { [k: string]: any }): google.type.Expr;

            /**
             * Creates a plain object from an Expr message. Also converts values to other types if specified.
             * @param message Expr
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Expr, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Expr to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace identity. */
    namespace identity {

        /** Namespace accesscontextmanager. */
        namespace accesscontextmanager {

            /** Namespace v1. */
            namespace v1 {

                /** Properties of an AccessLevel. */
                interface IAccessLevel {

                    /** AccessLevel name */
                    name?: (string|null);

                    /** AccessLevel title */
                    title?: (string|null);

                    /** AccessLevel description */
                    description?: (string|null);

                    /** AccessLevel basic */
                    basic?: (google.identity.accesscontextmanager.v1.IBasicLevel|null);

                    /** AccessLevel custom */
                    custom?: (google.identity.accesscontextmanager.v1.ICustomLevel|null);

                    /** AccessLevel createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** AccessLevel updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an AccessLevel. */
                class AccessLevel implements IAccessLevel {

                    /**
                     * Constructs a new AccessLevel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IAccessLevel);

                    /** AccessLevel name. */
                    public name: string;

                    /** AccessLevel title. */
                    public title: string;

                    /** AccessLevel description. */
                    public description: string;

                    /** AccessLevel basic. */
                    public basic?: (google.identity.accesscontextmanager.v1.IBasicLevel|null);

                    /** AccessLevel custom. */
                    public custom?: (google.identity.accesscontextmanager.v1.ICustomLevel|null);

                    /** AccessLevel createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** AccessLevel updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** AccessLevel level. */
                    public level?: ("basic"|"custom");

                    /**
                     * Creates a new AccessLevel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessLevel instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IAccessLevel): google.identity.accesscontextmanager.v1.AccessLevel;

                    /**
                     * Encodes the specified AccessLevel message. Does not implicitly {@link google.identity.accesscontextmanager.v1.AccessLevel.verify|verify} messages.
                     * @param message AccessLevel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IAccessLevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessLevel message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.AccessLevel.verify|verify} messages.
                     * @param message AccessLevel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IAccessLevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessLevel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessLevel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.AccessLevel;

                    /**
                     * Decodes an AccessLevel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessLevel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.AccessLevel;

                    /**
                     * Verifies an AccessLevel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessLevel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessLevel
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.AccessLevel;

                    /**
                     * Creates a plain object from an AccessLevel message. Also converts values to other types if specified.
                     * @param message AccessLevel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.AccessLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessLevel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a BasicLevel. */
                interface IBasicLevel {

                    /** BasicLevel conditions */
                    conditions?: (google.identity.accesscontextmanager.v1.ICondition[]|null);

                    /** BasicLevel combiningFunction */
                    combiningFunction?: (google.identity.accesscontextmanager.v1.BasicLevel.ConditionCombiningFunction|keyof typeof google.identity.accesscontextmanager.v1.BasicLevel.ConditionCombiningFunction|null);
                }

                /** Represents a BasicLevel. */
                class BasicLevel implements IBasicLevel {

                    /**
                     * Constructs a new BasicLevel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IBasicLevel);

                    /** BasicLevel conditions. */
                    public conditions: google.identity.accesscontextmanager.v1.ICondition[];

                    /** BasicLevel combiningFunction. */
                    public combiningFunction: (google.identity.accesscontextmanager.v1.BasicLevel.ConditionCombiningFunction|keyof typeof google.identity.accesscontextmanager.v1.BasicLevel.ConditionCombiningFunction);

                    /**
                     * Creates a new BasicLevel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns BasicLevel instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IBasicLevel): google.identity.accesscontextmanager.v1.BasicLevel;

                    /**
                     * Encodes the specified BasicLevel message. Does not implicitly {@link google.identity.accesscontextmanager.v1.BasicLevel.verify|verify} messages.
                     * @param message BasicLevel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IBasicLevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified BasicLevel message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.BasicLevel.verify|verify} messages.
                     * @param message BasicLevel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IBasicLevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a BasicLevel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns BasicLevel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.BasicLevel;

                    /**
                     * Decodes a BasicLevel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns BasicLevel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.BasicLevel;

                    /**
                     * Verifies a BasicLevel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a BasicLevel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns BasicLevel
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.BasicLevel;

                    /**
                     * Creates a plain object from a BasicLevel message. Also converts values to other types if specified.
                     * @param message BasicLevel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.BasicLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this BasicLevel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace BasicLevel {

                    /** ConditionCombiningFunction enum. */
                    enum ConditionCombiningFunction {
                        AND = 0,
                        OR = 1
                    }
                }

                /** Properties of a Condition. */
                interface ICondition {

                    /** Condition ipSubnetworks */
                    ipSubnetworks?: (string[]|null);

                    /** Condition devicePolicy */
                    devicePolicy?: (google.identity.accesscontextmanager.v1.IDevicePolicy|null);

                    /** Condition requiredAccessLevels */
                    requiredAccessLevels?: (string[]|null);

                    /** Condition negate */
                    negate?: (boolean|null);

                    /** Condition members */
                    members?: (string[]|null);

                    /** Condition regions */
                    regions?: (string[]|null);
                }

                /** Represents a Condition. */
                class Condition implements ICondition {

                    /**
                     * Constructs a new Condition.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.ICondition);

                    /** Condition ipSubnetworks. */
                    public ipSubnetworks: string[];

                    /** Condition devicePolicy. */
                    public devicePolicy?: (google.identity.accesscontextmanager.v1.IDevicePolicy|null);

                    /** Condition requiredAccessLevels. */
                    public requiredAccessLevels: string[];

                    /** Condition negate. */
                    public negate: boolean;

                    /** Condition members. */
                    public members: string[];

                    /** Condition regions. */
                    public regions: string[];

                    /**
                     * Creates a new Condition instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Condition instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.ICondition): google.identity.accesscontextmanager.v1.Condition;

                    /**
                     * Encodes the specified Condition message. Does not implicitly {@link google.identity.accesscontextmanager.v1.Condition.verify|verify} messages.
                     * @param message Condition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.ICondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Condition message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.Condition.verify|verify} messages.
                     * @param message Condition message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ICondition, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Condition message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Condition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.Condition;

                    /**
                     * Decodes a Condition message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Condition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.Condition;

                    /**
                     * Verifies a Condition message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Condition message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Condition
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.Condition;

                    /**
                     * Creates a plain object from a Condition message. Also converts values to other types if specified.
                     * @param message Condition
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.Condition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Condition to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CustomLevel. */
                interface ICustomLevel {

                    /** CustomLevel expr */
                    expr?: (google.type.IExpr|null);
                }

                /** Represents a CustomLevel. */
                class CustomLevel implements ICustomLevel {

                    /**
                     * Constructs a new CustomLevel.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.ICustomLevel);

                    /** CustomLevel expr. */
                    public expr?: (google.type.IExpr|null);

                    /**
                     * Creates a new CustomLevel instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CustomLevel instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.ICustomLevel): google.identity.accesscontextmanager.v1.CustomLevel;

                    /**
                     * Encodes the specified CustomLevel message. Does not implicitly {@link google.identity.accesscontextmanager.v1.CustomLevel.verify|verify} messages.
                     * @param message CustomLevel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.ICustomLevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CustomLevel message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.CustomLevel.verify|verify} messages.
                     * @param message CustomLevel message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ICustomLevel, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CustomLevel message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CustomLevel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.CustomLevel;

                    /**
                     * Decodes a CustomLevel message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CustomLevel
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.CustomLevel;

                    /**
                     * Verifies a CustomLevel message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CustomLevel message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CustomLevel
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.CustomLevel;

                    /**
                     * Creates a plain object from a CustomLevel message. Also converts values to other types if specified.
                     * @param message CustomLevel
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.CustomLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CustomLevel to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a DevicePolicy. */
                interface IDevicePolicy {

                    /** DevicePolicy requireScreenlock */
                    requireScreenlock?: (boolean|null);

                    /** DevicePolicy allowedEncryptionStatuses */
                    allowedEncryptionStatuses?: (google.identity.accesscontextmanager.type.DeviceEncryptionStatus[]|null);

                    /** DevicePolicy osConstraints */
                    osConstraints?: (google.identity.accesscontextmanager.v1.IOsConstraint[]|null);

                    /** DevicePolicy allowedDeviceManagementLevels */
                    allowedDeviceManagementLevels?: (google.identity.accesscontextmanager.type.DeviceManagementLevel[]|null);

                    /** DevicePolicy requireAdminApproval */
                    requireAdminApproval?: (boolean|null);

                    /** DevicePolicy requireCorpOwned */
                    requireCorpOwned?: (boolean|null);
                }

                /** Represents a DevicePolicy. */
                class DevicePolicy implements IDevicePolicy {

                    /**
                     * Constructs a new DevicePolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IDevicePolicy);

                    /** DevicePolicy requireScreenlock. */
                    public requireScreenlock: boolean;

                    /** DevicePolicy allowedEncryptionStatuses. */
                    public allowedEncryptionStatuses: google.identity.accesscontextmanager.type.DeviceEncryptionStatus[];

                    /** DevicePolicy osConstraints. */
                    public osConstraints: google.identity.accesscontextmanager.v1.IOsConstraint[];

                    /** DevicePolicy allowedDeviceManagementLevels. */
                    public allowedDeviceManagementLevels: google.identity.accesscontextmanager.type.DeviceManagementLevel[];

                    /** DevicePolicy requireAdminApproval. */
                    public requireAdminApproval: boolean;

                    /** DevicePolicy requireCorpOwned. */
                    public requireCorpOwned: boolean;

                    /**
                     * Creates a new DevicePolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns DevicePolicy instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IDevicePolicy): google.identity.accesscontextmanager.v1.DevicePolicy;

                    /**
                     * Encodes the specified DevicePolicy message. Does not implicitly {@link google.identity.accesscontextmanager.v1.DevicePolicy.verify|verify} messages.
                     * @param message DevicePolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IDevicePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified DevicePolicy message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.DevicePolicy.verify|verify} messages.
                     * @param message DevicePolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IDevicePolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a DevicePolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns DevicePolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.DevicePolicy;

                    /**
                     * Decodes a DevicePolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns DevicePolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.DevicePolicy;

                    /**
                     * Verifies a DevicePolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a DevicePolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns DevicePolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.DevicePolicy;

                    /**
                     * Creates a plain object from a DevicePolicy message. Also converts values to other types if specified.
                     * @param message DevicePolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.DevicePolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this DevicePolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an OsConstraint. */
                interface IOsConstraint {

                    /** OsConstraint osType */
                    osType?: (google.identity.accesscontextmanager.type.OsType|keyof typeof google.identity.accesscontextmanager.type.OsType|null);

                    /** OsConstraint minimumVersion */
                    minimumVersion?: (string|null);

                    /** OsConstraint requireVerifiedChromeOs */
                    requireVerifiedChromeOs?: (boolean|null);
                }

                /** Represents an OsConstraint. */
                class OsConstraint implements IOsConstraint {

                    /**
                     * Constructs a new OsConstraint.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IOsConstraint);

                    /** OsConstraint osType. */
                    public osType: (google.identity.accesscontextmanager.type.OsType|keyof typeof google.identity.accesscontextmanager.type.OsType);

                    /** OsConstraint minimumVersion. */
                    public minimumVersion: string;

                    /** OsConstraint requireVerifiedChromeOs. */
                    public requireVerifiedChromeOs: boolean;

                    /**
                     * Creates a new OsConstraint instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OsConstraint instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IOsConstraint): google.identity.accesscontextmanager.v1.OsConstraint;

                    /**
                     * Encodes the specified OsConstraint message. Does not implicitly {@link google.identity.accesscontextmanager.v1.OsConstraint.verify|verify} messages.
                     * @param message OsConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IOsConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OsConstraint message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.OsConstraint.verify|verify} messages.
                     * @param message OsConstraint message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IOsConstraint, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OsConstraint message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OsConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.OsConstraint;

                    /**
                     * Decodes an OsConstraint message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OsConstraint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.OsConstraint;

                    /**
                     * Verifies an OsConstraint message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OsConstraint message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OsConstraint
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.OsConstraint;

                    /**
                     * Creates a plain object from an OsConstraint message. Also converts values to other types if specified.
                     * @param message OsConstraint
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.OsConstraint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OsConstraint to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an AccessPolicy. */
                interface IAccessPolicy {

                    /** AccessPolicy name */
                    name?: (string|null);

                    /** AccessPolicy parent */
                    parent?: (string|null);

                    /** AccessPolicy title */
                    title?: (string|null);

                    /** AccessPolicy createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** AccessPolicy updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** AccessPolicy etag */
                    etag?: (string|null);
                }

                /** Represents an AccessPolicy. */
                class AccessPolicy implements IAccessPolicy {

                    /**
                     * Constructs a new AccessPolicy.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IAccessPolicy);

                    /** AccessPolicy name. */
                    public name: string;

                    /** AccessPolicy parent. */
                    public parent: string;

                    /** AccessPolicy title. */
                    public title: string;

                    /** AccessPolicy createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** AccessPolicy updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** AccessPolicy etag. */
                    public etag: string;

                    /**
                     * Creates a new AccessPolicy instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns AccessPolicy instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IAccessPolicy): google.identity.accesscontextmanager.v1.AccessPolicy;

                    /**
                     * Encodes the specified AccessPolicy message. Does not implicitly {@link google.identity.accesscontextmanager.v1.AccessPolicy.verify|verify} messages.
                     * @param message AccessPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IAccessPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified AccessPolicy message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.AccessPolicy.verify|verify} messages.
                     * @param message AccessPolicy message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IAccessPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an AccessPolicy message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns AccessPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.AccessPolicy;

                    /**
                     * Decodes an AccessPolicy message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns AccessPolicy
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.AccessPolicy;

                    /**
                     * Verifies an AccessPolicy message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an AccessPolicy message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns AccessPolicy
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.AccessPolicy;

                    /**
                     * Creates a plain object from an AccessPolicy message. Also converts values to other types if specified.
                     * @param message AccessPolicy
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.AccessPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this AccessPolicy to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ServicePerimeter. */
                interface IServicePerimeter {

                    /** ServicePerimeter name */
                    name?: (string|null);

                    /** ServicePerimeter title */
                    title?: (string|null);

                    /** ServicePerimeter description */
                    description?: (string|null);

                    /** ServicePerimeter createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** ServicePerimeter updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** ServicePerimeter perimeterType */
                    perimeterType?: (google.identity.accesscontextmanager.v1.ServicePerimeter.PerimeterType|keyof typeof google.identity.accesscontextmanager.v1.ServicePerimeter.PerimeterType|null);

                    /** ServicePerimeter status */
                    status?: (google.identity.accesscontextmanager.v1.IServicePerimeterConfig|null);

                    /** ServicePerimeter spec */
                    spec?: (google.identity.accesscontextmanager.v1.IServicePerimeterConfig|null);

                    /** ServicePerimeter useExplicitDryRunSpec */
                    useExplicitDryRunSpec?: (boolean|null);
                }

                /** Represents a ServicePerimeter. */
                class ServicePerimeter implements IServicePerimeter {

                    /**
                     * Constructs a new ServicePerimeter.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IServicePerimeter);

                    /** ServicePerimeter name. */
                    public name: string;

                    /** ServicePerimeter title. */
                    public title: string;

                    /** ServicePerimeter description. */
                    public description: string;

                    /** ServicePerimeter createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** ServicePerimeter updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** ServicePerimeter perimeterType. */
                    public perimeterType: (google.identity.accesscontextmanager.v1.ServicePerimeter.PerimeterType|keyof typeof google.identity.accesscontextmanager.v1.ServicePerimeter.PerimeterType);

                    /** ServicePerimeter status. */
                    public status?: (google.identity.accesscontextmanager.v1.IServicePerimeterConfig|null);

                    /** ServicePerimeter spec. */
                    public spec?: (google.identity.accesscontextmanager.v1.IServicePerimeterConfig|null);

                    /** ServicePerimeter useExplicitDryRunSpec. */
                    public useExplicitDryRunSpec: boolean;

                    /**
                     * Creates a new ServicePerimeter instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServicePerimeter instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IServicePerimeter): google.identity.accesscontextmanager.v1.ServicePerimeter;

                    /**
                     * Encodes the specified ServicePerimeter message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeter.verify|verify} messages.
                     * @param message ServicePerimeter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IServicePerimeter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServicePerimeter message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeter.verify|verify} messages.
                     * @param message ServicePerimeter message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IServicePerimeter, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServicePerimeter message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServicePerimeter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeter;

                    /**
                     * Decodes a ServicePerimeter message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServicePerimeter
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeter;

                    /**
                     * Verifies a ServicePerimeter message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServicePerimeter message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServicePerimeter
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeter;

                    /**
                     * Creates a plain object from a ServicePerimeter message. Also converts values to other types if specified.
                     * @param message ServicePerimeter
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServicePerimeter to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ServicePerimeter {

                    /** PerimeterType enum. */
                    enum PerimeterType {
                        PERIMETER_TYPE_REGULAR = 0,
                        PERIMETER_TYPE_BRIDGE = 1
                    }
                }

                /** Properties of a ServicePerimeterConfig. */
                interface IServicePerimeterConfig {

                    /** ServicePerimeterConfig resources */
                    resources?: (string[]|null);

                    /** ServicePerimeterConfig accessLevels */
                    accessLevels?: (string[]|null);

                    /** ServicePerimeterConfig restrictedServices */
                    restrictedServices?: (string[]|null);

                    /** ServicePerimeterConfig vpcAccessibleServices */
                    vpcAccessibleServices?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IVpcAccessibleServices|null);
                }

                /** Represents a ServicePerimeterConfig. */
                class ServicePerimeterConfig implements IServicePerimeterConfig {

                    /**
                     * Constructs a new ServicePerimeterConfig.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.identity.accesscontextmanager.v1.IServicePerimeterConfig);

                    /** ServicePerimeterConfig resources. */
                    public resources: string[];

                    /** ServicePerimeterConfig accessLevels. */
                    public accessLevels: string[];

                    /** ServicePerimeterConfig restrictedServices. */
                    public restrictedServices: string[];

                    /** ServicePerimeterConfig vpcAccessibleServices. */
                    public vpcAccessibleServices?: (google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IVpcAccessibleServices|null);

                    /**
                     * Creates a new ServicePerimeterConfig instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ServicePerimeterConfig instance
                     */
                    public static create(properties?: google.identity.accesscontextmanager.v1.IServicePerimeterConfig): google.identity.accesscontextmanager.v1.ServicePerimeterConfig;

                    /**
                     * Encodes the specified ServicePerimeterConfig message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.verify|verify} messages.
                     * @param message ServicePerimeterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.identity.accesscontextmanager.v1.IServicePerimeterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ServicePerimeterConfig message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.verify|verify} messages.
                     * @param message ServicePerimeterConfig message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.identity.accesscontextmanager.v1.IServicePerimeterConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ServicePerimeterConfig message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ServicePerimeterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeterConfig;

                    /**
                     * Decodes a ServicePerimeterConfig message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ServicePerimeterConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeterConfig;

                    /**
                     * Verifies a ServicePerimeterConfig message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ServicePerimeterConfig message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ServicePerimeterConfig
                     */
                    public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeterConfig;

                    /**
                     * Creates a plain object from a ServicePerimeterConfig message. Also converts values to other types if specified.
                     * @param message ServicePerimeterConfig
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ServicePerimeterConfig to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ServicePerimeterConfig {

                    /** Properties of a VpcAccessibleServices. */
                    interface IVpcAccessibleServices {

                        /** VpcAccessibleServices enableRestriction */
                        enableRestriction?: (boolean|null);

                        /** VpcAccessibleServices allowedServices */
                        allowedServices?: (string[]|null);
                    }

                    /** Represents a VpcAccessibleServices. */
                    class VpcAccessibleServices implements IVpcAccessibleServices {

                        /**
                         * Constructs a new VpcAccessibleServices.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IVpcAccessibleServices);

                        /** VpcAccessibleServices enableRestriction. */
                        public enableRestriction: boolean;

                        /** VpcAccessibleServices allowedServices. */
                        public allowedServices: string[];

                        /**
                         * Creates a new VpcAccessibleServices instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VpcAccessibleServices instance
                         */
                        public static create(properties?: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IVpcAccessibleServices): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices;

                        /**
                         * Encodes the specified VpcAccessibleServices message. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices.verify|verify} messages.
                         * @param message VpcAccessibleServices message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IVpcAccessibleServices, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VpcAccessibleServices message, length delimited. Does not implicitly {@link google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices.verify|verify} messages.
                         * @param message VpcAccessibleServices message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.IVpcAccessibleServices, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VpcAccessibleServices message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VpcAccessibleServices
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices;

                        /**
                         * Decodes a VpcAccessibleServices message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VpcAccessibleServices
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices;

                        /**
                         * Verifies a VpcAccessibleServices message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VpcAccessibleServices message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VpcAccessibleServices
                         */
                        public static fromObject(object: { [k: string]: any }): google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices;

                        /**
                         * Creates a plain object from a VpcAccessibleServices message. Also converts values to other types if specified.
                         * @param message VpcAccessibleServices
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.identity.accesscontextmanager.v1.ServicePerimeterConfig.VpcAccessibleServices, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VpcAccessibleServices to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }

            /** Namespace type. */
            namespace type {

                /** DeviceEncryptionStatus enum. */
                enum DeviceEncryptionStatus {
                    ENCRYPTION_UNSPECIFIED = 0,
                    ENCRYPTION_UNSUPPORTED = 1,
                    UNENCRYPTED = 2,
                    ENCRYPTED = 3
                }

                /** OsType enum. */
                enum OsType {
                    OS_UNSPECIFIED = 0,
                    DESKTOP_MAC = 1,
                    DESKTOP_WINDOWS = 2,
                    DESKTOP_LINUX = 3,
                    DESKTOP_CHROME_OS = 6,
                    ANDROID = 4,
                    IOS = 5
                }

                /** DeviceManagementLevel enum. */
                enum DeviceManagementLevel {
                    MANAGEMENT_UNSPECIFIED = 0,
                    NONE = 1,
                    BASIC = 2,
                    COMPLETE = 3
                }
            }
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Code enum. */
        enum Code {
            OK = 0,
            CANCELLED = 1,
            UNKNOWN = 2,
            INVALID_ARGUMENT = 3,
            DEADLINE_EXCEEDED = 4,
            NOT_FOUND = 5,
            ALREADY_EXISTS = 6,
            PERMISSION_DENIED = 7,
            UNAUTHENTICATED = 16,
            RESOURCE_EXHAUSTED = 8,
            FAILED_PRECONDITION = 9,
            ABORTED = 10,
            OUT_OF_RANGE = 11,
            UNIMPLEMENTED = 12,
            INTERNAL = 13,
            UNAVAILABLE = 14,
            DATA_LOSS = 15
        }

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
