// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: evmos/erc20/v1/erc20.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_2 from "./../../../cosmos/bank/v1beta1/bank";
import * as pb_1 from "google-protobuf";
export namespace evmos.erc20.v1 {
    export enum Owner {
        OWNER_UNSPECIFIED = 0,
        OWNER_MODULE = 1,
        OWNER_EXTERNAL = 2
    }
    export class TokenPair extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            erc20_address?: string;
            denom?: string;
            enabled?: boolean;
            contract_owner?: Owner;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("erc20_address" in data && data.erc20_address != undefined) {
                    this.erc20_address = data.erc20_address;
                }
                if ("denom" in data && data.denom != undefined) {
                    this.denom = data.denom;
                }
                if ("enabled" in data && data.enabled != undefined) {
                    this.enabled = data.enabled;
                }
                if ("contract_owner" in data && data.contract_owner != undefined) {
                    this.contract_owner = data.contract_owner;
                }
            }
        }
        get erc20_address() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set erc20_address(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get denom() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set denom(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get enabled() {
            return pb_1.Message.getField(this, 3) as boolean;
        }
        set enabled(value: boolean) {
            pb_1.Message.setField(this, 3, value);
        }
        get contract_owner() {
            return pb_1.Message.getField(this, 4) as Owner;
        }
        set contract_owner(value: Owner) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            erc20_address?: string;
            denom?: string;
            enabled?: boolean;
            contract_owner?: Owner;
        }) {
            const message = new TokenPair({});
            if (data.erc20_address != null) {
                message.erc20_address = data.erc20_address;
            }
            if (data.denom != null) {
                message.denom = data.denom;
            }
            if (data.enabled != null) {
                message.enabled = data.enabled;
            }
            if (data.contract_owner != null) {
                message.contract_owner = data.contract_owner;
            }
            return message;
        }
        toObject() {
            const data: {
                erc20_address?: string;
                denom?: string;
                enabled?: boolean;
                contract_owner?: Owner;
            } = {};
            if (this.erc20_address != null) {
                data.erc20_address = this.erc20_address;
            }
            if (this.denom != null) {
                data.denom = this.denom;
            }
            if (this.enabled != null) {
                data.enabled = this.enabled;
            }
            if (this.contract_owner != null) {
                data.contract_owner = this.contract_owner;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.erc20_address === "string" && this.erc20_address.length)
                writer.writeString(1, this.erc20_address);
            if (typeof this.denom === "string" && this.denom.length)
                writer.writeString(2, this.denom);
            if (this.enabled !== undefined)
                writer.writeBool(3, this.enabled);
            if (this.contract_owner !== undefined)
                writer.writeEnum(4, this.contract_owner);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TokenPair {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TokenPair();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.erc20_address = reader.readString();
                        break;
                    case 2:
                        message.denom = reader.readString();
                        break;
                    case 3:
                        message.enabled = reader.readBool();
                        break;
                    case 4:
                        message.contract_owner = reader.readEnum();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): TokenPair {
            return TokenPair.deserialize(bytes);
        }
    }
    export class RegisterCoinProposal extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            metadata?: dependency_2.cosmos.bank.v1beta1.Metadata;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("title" in data && data.title != undefined) {
                    this.title = data.title;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("metadata" in data && data.metadata != undefined) {
                    this.metadata = data.metadata;
                }
            }
        }
        get title() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set title(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get description() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get metadata() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.bank.v1beta1.Metadata, 3) as dependency_2.cosmos.bank.v1beta1.Metadata;
        }
        set metadata(value: dependency_2.cosmos.bank.v1beta1.Metadata) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        static fromObject(data: {
            title?: string;
            description?: string;
            metadata?: ReturnType<typeof dependency_2.cosmos.bank.v1beta1.Metadata.prototype.toObject>;
        }) {
            const message = new RegisterCoinProposal({});
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.metadata != null) {
                message.metadata = dependency_2.cosmos.bank.v1beta1.Metadata.fromObject(data.metadata);
            }
            return message;
        }
        toObject() {
            const data: {
                title?: string;
                description?: string;
                metadata?: ReturnType<typeof dependency_2.cosmos.bank.v1beta1.Metadata.prototype.toObject>;
            } = {};
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.metadata != null) {
                data.metadata = this.metadata.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length)
                writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length)
                writer.writeString(2, this.description);
            if (this.metadata !== undefined)
                writer.writeMessage(3, this.metadata, () => this.metadata.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RegisterCoinProposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RegisterCoinProposal();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.title = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
                        break;
                    case 3:
                        reader.readMessage(message.metadata, () => message.metadata = dependency_2.cosmos.bank.v1beta1.Metadata.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): RegisterCoinProposal {
            return RegisterCoinProposal.deserialize(bytes);
        }
    }
    export class RegisterERC20Proposal extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            erc20address?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("title" in data && data.title != undefined) {
                    this.title = data.title;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("erc20address" in data && data.erc20address != undefined) {
                    this.erc20address = data.erc20address;
                }
            }
        }
        get title() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set title(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get description() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get erc20address() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set erc20address(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            title?: string;
            description?: string;
            erc20address?: string;
        }) {
            const message = new RegisterERC20Proposal({});
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.erc20address != null) {
                message.erc20address = data.erc20address;
            }
            return message;
        }
        toObject() {
            const data: {
                title?: string;
                description?: string;
                erc20address?: string;
            } = {};
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.erc20address != null) {
                data.erc20address = this.erc20address;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length)
                writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length)
                writer.writeString(2, this.description);
            if (typeof this.erc20address === "string" && this.erc20address.length)
                writer.writeString(3, this.erc20address);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RegisterERC20Proposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RegisterERC20Proposal();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.title = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
                        break;
                    case 3:
                        message.erc20address = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): RegisterERC20Proposal {
            return RegisterERC20Proposal.deserialize(bytes);
        }
    }
    export class ToggleTokenConversionProposal extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            token?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("title" in data && data.title != undefined) {
                    this.title = data.title;
                }
                if ("description" in data && data.description != undefined) {
                    this.description = data.description;
                }
                if ("token" in data && data.token != undefined) {
                    this.token = data.token;
                }
            }
        }
        get title() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set title(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get description() {
            return pb_1.Message.getField(this, 2) as string;
        }
        set description(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get token() {
            return pb_1.Message.getField(this, 3) as string;
        }
        set token(value: string) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            title?: string;
            description?: string;
            token?: string;
        }) {
            const message = new ToggleTokenConversionProposal({});
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.token != null) {
                message.token = data.token;
            }
            return message;
        }
        toObject() {
            const data: {
                title?: string;
                description?: string;
                token?: string;
            } = {};
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.token != null) {
                data.token = this.token;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.title === "string" && this.title.length)
                writer.writeString(1, this.title);
            if (typeof this.description === "string" && this.description.length)
                writer.writeString(2, this.description);
            if (typeof this.token === "string" && this.token.length)
                writer.writeString(3, this.token);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ToggleTokenConversionProposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ToggleTokenConversionProposal();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.title = reader.readString();
                        break;
                    case 2:
                        message.description = reader.readString();
                        break;
                    case 3:
                        message.token = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ToggleTokenConversionProposal {
            return ToggleTokenConversionProposal.deserialize(bytes);
        }
    }
}
