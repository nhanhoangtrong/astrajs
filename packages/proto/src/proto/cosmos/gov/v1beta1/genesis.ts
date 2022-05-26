// @ts-nocheck
/* eslint-disable */
/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.19.4
 * source: cosmos/gov/v1beta1/genesis.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_2 from "./gov";
import * as pb_1 from "google-protobuf";
export namespace cosmos.gov.v1beta1 {
    export class GenesisState extends pb_1.Message {
        #one_of_decls = [];
        constructor(data?: any[] | {
            starting_proposal_id?: number;
            deposits?: dependency_2.cosmos.gov.v1beta1.Deposit[];
            votes?: dependency_2.cosmos.gov.v1beta1.Vote[];
            proposals?: dependency_2.cosmos.gov.v1beta1.Proposal[];
            deposit_params?: dependency_2.cosmos.gov.v1beta1.DepositParams;
            voting_params?: dependency_2.cosmos.gov.v1beta1.VotingParams;
            tally_params?: dependency_2.cosmos.gov.v1beta1.TallyParams;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2, 3, 4], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("starting_proposal_id" in data && data.starting_proposal_id != undefined) {
                    this.starting_proposal_id = data.starting_proposal_id;
                }
                if ("deposits" in data && data.deposits != undefined) {
                    this.deposits = data.deposits;
                }
                if ("votes" in data && data.votes != undefined) {
                    this.votes = data.votes;
                }
                if ("proposals" in data && data.proposals != undefined) {
                    this.proposals = data.proposals;
                }
                if ("deposit_params" in data && data.deposit_params != undefined) {
                    this.deposit_params = data.deposit_params;
                }
                if ("voting_params" in data && data.voting_params != undefined) {
                    this.voting_params = data.voting_params;
                }
                if ("tally_params" in data && data.tally_params != undefined) {
                    this.tally_params = data.tally_params;
                }
            }
        }
        get starting_proposal_id() {
            return pb_1.Message.getField(this, 1) as number;
        }
        set starting_proposal_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get deposits() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.gov.v1beta1.Deposit, 2) as dependency_2.cosmos.gov.v1beta1.Deposit[];
        }
        set deposits(value: dependency_2.cosmos.gov.v1beta1.Deposit[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        get votes() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.gov.v1beta1.Vote, 3) as dependency_2.cosmos.gov.v1beta1.Vote[];
        }
        set votes(value: dependency_2.cosmos.gov.v1beta1.Vote[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get proposals() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_2.cosmos.gov.v1beta1.Proposal, 4) as dependency_2.cosmos.gov.v1beta1.Proposal[];
        }
        set proposals(value: dependency_2.cosmos.gov.v1beta1.Proposal[]) {
            pb_1.Message.setRepeatedWrapperField(this, 4, value);
        }
        get deposit_params() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.gov.v1beta1.DepositParams, 5) as dependency_2.cosmos.gov.v1beta1.DepositParams;
        }
        set deposit_params(value: dependency_2.cosmos.gov.v1beta1.DepositParams) {
            pb_1.Message.setWrapperField(this, 5, value);
        }
        get voting_params() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.gov.v1beta1.VotingParams, 6) as dependency_2.cosmos.gov.v1beta1.VotingParams;
        }
        set voting_params(value: dependency_2.cosmos.gov.v1beta1.VotingParams) {
            pb_1.Message.setWrapperField(this, 6, value);
        }
        get tally_params() {
            return pb_1.Message.getWrapperField(this, dependency_2.cosmos.gov.v1beta1.TallyParams, 7) as dependency_2.cosmos.gov.v1beta1.TallyParams;
        }
        set tally_params(value: dependency_2.cosmos.gov.v1beta1.TallyParams) {
            pb_1.Message.setWrapperField(this, 7, value);
        }
        static fromObject(data: {
            starting_proposal_id?: number;
            deposits?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.Deposit.prototype.toObject>[];
            votes?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.Vote.prototype.toObject>[];
            proposals?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.Proposal.prototype.toObject>[];
            deposit_params?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.DepositParams.prototype.toObject>;
            voting_params?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.VotingParams.prototype.toObject>;
            tally_params?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.TallyParams.prototype.toObject>;
        }) {
            const message = new GenesisState({});
            if (data.starting_proposal_id != null) {
                message.starting_proposal_id = data.starting_proposal_id;
            }
            if (data.deposits != null) {
                message.deposits = data.deposits.map(item => dependency_2.cosmos.gov.v1beta1.Deposit.fromObject(item));
            }
            if (data.votes != null) {
                message.votes = data.votes.map(item => dependency_2.cosmos.gov.v1beta1.Vote.fromObject(item));
            }
            if (data.proposals != null) {
                message.proposals = data.proposals.map(item => dependency_2.cosmos.gov.v1beta1.Proposal.fromObject(item));
            }
            if (data.deposit_params != null) {
                message.deposit_params = dependency_2.cosmos.gov.v1beta1.DepositParams.fromObject(data.deposit_params);
            }
            if (data.voting_params != null) {
                message.voting_params = dependency_2.cosmos.gov.v1beta1.VotingParams.fromObject(data.voting_params);
            }
            if (data.tally_params != null) {
                message.tally_params = dependency_2.cosmos.gov.v1beta1.TallyParams.fromObject(data.tally_params);
            }
            return message;
        }
        toObject() {
            const data: {
                starting_proposal_id?: number;
                deposits?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.Deposit.prototype.toObject>[];
                votes?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.Vote.prototype.toObject>[];
                proposals?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.Proposal.prototype.toObject>[];
                deposit_params?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.DepositParams.prototype.toObject>;
                voting_params?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.VotingParams.prototype.toObject>;
                tally_params?: ReturnType<typeof dependency_2.cosmos.gov.v1beta1.TallyParams.prototype.toObject>;
            } = {};
            if (this.starting_proposal_id != null) {
                data.starting_proposal_id = this.starting_proposal_id;
            }
            if (this.deposits != null) {
                data.deposits = this.deposits.map((item: dependency_2.cosmos.gov.v1beta1.Deposit) => item.toObject());
            }
            if (this.votes != null) {
                data.votes = this.votes.map((item: dependency_2.cosmos.gov.v1beta1.Vote) => item.toObject());
            }
            if (this.proposals != null) {
                data.proposals = this.proposals.map((item: dependency_2.cosmos.gov.v1beta1.Proposal) => item.toObject());
            }
            if (this.deposit_params != null) {
                data.deposit_params = this.deposit_params.toObject();
            }
            if (this.voting_params != null) {
                data.voting_params = this.voting_params.toObject();
            }
            if (this.tally_params != null) {
                data.tally_params = this.tally_params.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.starting_proposal_id !== undefined)
                writer.writeUint64(1, this.starting_proposal_id);
            if (this.deposits !== undefined)
                writer.writeRepeatedMessage(2, this.deposits, (item: dependency_2.cosmos.gov.v1beta1.Deposit) => item.serialize(writer));
            if (this.votes !== undefined)
                writer.writeRepeatedMessage(3, this.votes, (item: dependency_2.cosmos.gov.v1beta1.Vote) => item.serialize(writer));
            if (this.proposals !== undefined)
                writer.writeRepeatedMessage(4, this.proposals, (item: dependency_2.cosmos.gov.v1beta1.Proposal) => item.serialize(writer));
            if (this.deposit_params !== undefined)
                writer.writeMessage(5, this.deposit_params, () => this.deposit_params.serialize(writer));
            if (this.voting_params !== undefined)
                writer.writeMessage(6, this.voting_params, () => this.voting_params.serialize(writer));
            if (this.tally_params !== undefined)
                writer.writeMessage(7, this.tally_params, () => this.tally_params.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GenesisState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GenesisState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.starting_proposal_id = reader.readUint64();
                        break;
                    case 2:
                        reader.readMessage(message.deposits, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_2.cosmos.gov.v1beta1.Deposit.deserialize(reader), dependency_2.cosmos.gov.v1beta1.Deposit));
                        break;
                    case 3:
                        reader.readMessage(message.votes, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_2.cosmos.gov.v1beta1.Vote.deserialize(reader), dependency_2.cosmos.gov.v1beta1.Vote));
                        break;
                    case 4:
                        reader.readMessage(message.proposals, () => pb_1.Message.addToRepeatedWrapperField(message, 4, dependency_2.cosmos.gov.v1beta1.Proposal.deserialize(reader), dependency_2.cosmos.gov.v1beta1.Proposal));
                        break;
                    case 5:
                        reader.readMessage(message.deposit_params, () => message.deposit_params = dependency_2.cosmos.gov.v1beta1.DepositParams.deserialize(reader));
                        break;
                    case 6:
                        reader.readMessage(message.voting_params, () => message.voting_params = dependency_2.cosmos.gov.v1beta1.VotingParams.deserialize(reader));
                        break;
                    case 7:
                        reader.readMessage(message.tally_params, () => message.tally_params = dependency_2.cosmos.gov.v1beta1.TallyParams.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): GenesisState {
            return GenesisState.deserialize(bytes);
        }
    }
}
