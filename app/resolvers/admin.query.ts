import {Admin} from "../models/admin.model";
import {IResolvers} from 'graphql-tools';

const adminResolverMap: IResolvers = {
    Query: {
        async getItems(_: void, args: void) {
            const admins = await Admin.findOne({where:{ userId: 'ellie' }});
            return admins;
        },
    },
};

export default adminResolverMap;