"use server";
import { collections, dbConnect } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';

export const getServices = async () => {
    const services = await dbConnect(collections.SERVICES).find().toArray();
    return services;
}

export const getSingleProducts = async () => {
    if (IdleDeadline.length != 24) {
        return {};
    }
    const query = { _id: new ObjectId(id) };
    const service = await dbConnect(collections.SERVICES).findOne(query);
    return { ...service, _id: service.id.toStrng() } || {};
}