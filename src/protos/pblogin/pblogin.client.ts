// @generated by protobuf-ts 2.9.4
// @generated from protobuf file "pblogin/pblogin.proto" (package "pblogin", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { Login } from "./pblogin";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { CommonResult } from "../pbcommon/pbcommon";
import type { AdminLoginArgs } from "./pblogin";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service pblogin.Login
 */
export interface ILoginClient {
    /**
     * @generated from protobuf rpc: AdminLogin(pblogin.AdminLoginArgs) returns (pbcommon.CommonResult);
     */
    adminLogin(input: AdminLoginArgs, options?: RpcOptions): UnaryCall<AdminLoginArgs, CommonResult>;
}
/**
 * @generated from protobuf service pblogin.Login
 */
export class LoginClient implements ILoginClient, ServiceInfo {
    typeName = Login.typeName;
    methods = Login.methods;
    options = Login.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: AdminLogin(pblogin.AdminLoginArgs) returns (pbcommon.CommonResult);
     */
    adminLogin(input: AdminLoginArgs, options?: RpcOptions): UnaryCall<AdminLoginArgs, CommonResult> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<AdminLoginArgs, CommonResult>("unary", this._transport, method, opt, input);
    }
}