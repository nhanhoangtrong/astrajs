// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: cosmos/upgrade/v1beta1/upgrade.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../../google/protobuf/any";
import * as dependency_3 from "./../../../google/protobuf/timestamp";
import * as pb_1 from "google-protobuf";
export namespace cosmos.upgrade.v1beta1 {
    export class Plan extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            name?: string;
            /** @deprecated*/
            time?: dependency_3.google.protobuf.Timestamp;
            height?: number;
            info?: string;
            /** @deprecated*/
            upgraded_client_state?: dependency_1.google.protobuf.Any;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("time" in data && data.time != undefined) {
                    this.time = data.time;
                }
                if ("height" in data && data.height != undefined) {
                    this.height = data.height;
                }
                if ("info" in data && data.info != undefined) {
                    this.info = data.info;
                }
                if ("upgraded_client_state" in data && data.upgraded_client_state != undefined) {
                    this.upgraded_client_state = data.upgraded_client_state;
                }
            }
        }
        get name() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        /** @deprecated*/
        get time() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 2) as dependency_3.google.protobuf.Timestamp;
        }
        /** @deprecated*/
        set time(value: dependency_3.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get height() {
            return pb_1.Message.getField(this, 3) as number;
        }
        set height(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get info() {
            return pb_1.Message.getField(this, 4) as string;
        }
        set info(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        /** @deprecated*/
        get upgraded_client_state() {
            return pb_1.Message.getWrapperField(this, dependency_1.google.protobuf.Any, 5) as dependency_1.google.protobuf.Any;
        }
        /** @deprecated*/
        set upgraded_client_state(value: dependency_1.google.protobuf.Any) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        static fromObject(data: {
            name?: string;
            time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            height?: number;
            info?: string;
            upgraded_client_state?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
        }) {
            const message = new Plan({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.time != null) {
                message.time = dependency_3.google.protobuf.Timestamp.fromObject(data.time);
            }
            if (data.height != null) {
                message.height = data.height;
            }
            if (data.info != null) {
                message.info = data.info;
            }
            if (data.upgraded_client_state != null) {
                message.upgraded_client_state = dependency_1.google.protobuf.Any.fromObject(data.upgraded_client_state);
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                time?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
                height?: number;
                info?: string;
                upgraded_client_state?: ReturnType<typeof dependency_1.google.protobuf.Any.prototype.toObject>;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.time != null) {
                data.time = this.time.toObject();
            }
            if (this.height != null) {
                data.height = this.height;
            }
            if (this.info != null) {
                data.info = this.info;
            }
            if (this.upgraded_client_state != null) {
                data.upgraded_client_state = this.upgraded_client_state.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.name === "string" && this.name.length)
                writer.writeString(1, this.name);
            if (this.time !== undefined)
                writer.writeMessage(2, this.time, () => this.time.serialize(writer));
            if (this.height !== undefined)
                writer.writeInt64(3, this.height);
            if (typeof this.info === "string" && this.info.length)
                writer.writeString(4, this.info);
            if (this.upgraded_client_state !== undefined)
                writer.writeMessage(5, this.upgraded_client_state, () => this.upgraded_client_state.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Plan {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Plan();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.time, () => message.time = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 3:
                        message.height = reader.readInt64();
                        break;
                    case 4:
                        message.info = reader.readString();
                        break;
                    case 5:
                        reader.readMessage(message.upgraded_client_state, () => message.upgraded_client_state = dependency_1.google.protobuf.Any.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Plan {
            return Plan.deserialize(bytes);
        }
    }
    export class SoftwareUpgradeProposal extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            title?: string;
            description?: string;
            plan?: Plan;
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
                if ("plan" in data && data.plan != undefined) {
                    this.plan = data.plan;
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
        get plan() {
            return pb_1.Message.getWrapperField(this, Plan, 3) as Plan;
        }
        set plan(value: Plan) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        static fromObject(data: {
            title?: string;
            description?: string;
            plan?: ReturnType<typeof Plan.prototype.toObject>;
        }) {
            const message = new SoftwareUpgradeProposal({});
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            if (data.plan != null) {
                message.plan = Plan.fromObject(data.plan);
            }
            return message;
        }
        toObject() {
            const data: {
                title?: string;
                description?: string;
                plan?: ReturnType<typeof Plan.prototype.toObject>;
            } = {};
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.description != null) {
                data.description = this.description;
            }
            if (this.plan != null) {
                data.plan = this.plan.toObject();
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
            if (this.plan !== undefined)
                writer.writeMessage(3, this.plan, () => this.plan.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SoftwareUpgradeProposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SoftwareUpgradeProposal();
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
                        reader.readMessage(message.plan, () => message.plan = Plan.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SoftwareUpgradeProposal {
            return SoftwareUpgradeProposal.deserialize(bytes);
        }
    }
    export class CancelSoftwareUpgradeProposal extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            title?: string;
            description?: string;
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
        static fromObject(data: {
            title?: string;
            description?: string;
        }) {
            const message = new CancelSoftwareUpgradeProposal({});
            if (data.title != null) {
                message.title = data.title;
            }
            if (data.description != null) {
                message.description = data.description;
            }
            return message;
        }
        toObject() {
            const data: {
                title?: string;
                description?: string;
            } = {};
            if (this.title != null) {
                data.title = this.title;
            }
            if (this.description != null) {
                data.description = this.description;
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
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CancelSoftwareUpgradeProposal {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CancelSoftwareUpgradeProposal();
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
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): CancelSoftwareUpgradeProposal {
            return CancelSoftwareUpgradeProposal.deserialize(bytes);
        }
    }
    export class ModuleVersion extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            name?: string;
            version?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("name" in data && data.name != undefined) {
                    this.name = data.name;
                }
                if ("version" in data && data.version != undefined) {
                    this.version = data.version;
                }
            }
        }
        get name() {
            return pb_1.Message.getField(this, 1) as string;
        }
        set name(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get version() {
            return pb_1.Message.getField(this, 2) as number;
        }
        set version(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            name?: string;
            version?: number;
        }) {
            const message = new ModuleVersion({});
            if (data.name != null) {
                message.name = data.name;
            }
            if (data.version != null) {
                message.version = data.version;
            }
            return message;
        }
        toObject() {
            const data: {
                name?: string;
                version?: number;
            } = {};
            if (this.name != null) {
                data.name = this.name;
            }
            if (this.version != null) {
                data.version = this.version;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (typeof this.name === "string" && this.name.length)
                writer.writeString(1, this.name);
            if (this.version !== undefined)
                writer.writeUint64(2, this.version);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ModuleVersion {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ModuleVersion();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.name = reader.readString();
                        break;
                    case 2:
                        message.version = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ModuleVersion {
            return ModuleVersion.deserialize(bytes);
        }
    }
}
