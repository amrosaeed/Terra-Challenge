import * as safeJsonUtils from "safe-json-utils";
import * as rpcPayloadId from "rpc-payload-id";
export declare function sanitizeHex(hex: string): string;
export declare function addHexPrefix(hex: string): string;
export declare function removeHexPrefix(hex: string): string;
export declare function removeHexLeadingZeros(hex: string): string;
export declare const safeJsonParse: typeof safeJsonUtils.safeJsonParse;
export declare const safeJsonStringify: typeof safeJsonUtils.safeJsonStringify;
export declare const payloadId: typeof rpcPayloadId.payloadId;
export declare function uuid(): string;
export declare function logDeprecationWarning(): void;
//# sourceMappingURL=misc.d.ts.map