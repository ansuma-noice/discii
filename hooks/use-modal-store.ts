import { ChannelType, Server,Channel } from "@prisma/client";
import {create} from "zustand"

export type ModalType="createServer" | "invite" | "editServer" | "members" |"createChannel" | "leaveServer" | "deleteServer" | "deleteChannel" | "editChannel";

interface ModelData{
    server?:Server
    channel?:Channel
    channelType?:ChannelType
}

interface ModalStore{
    type:ModalType|null;
    data:ModelData;
    isOpen:boolean;
    onOpen:(type:ModalType,data?:ModelData)=>void
    onClose:()=>void
}

export const useModal =create<ModalStore>((set)=>({
    type:null,
    data:{},
    isOpen:false,
    onOpen :(type,data={})=>set({isOpen:true,type,data}),
    onClose:()=>set({isOpen:false,type:null}),
}))




