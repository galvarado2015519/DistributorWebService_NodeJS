const DistributorModel = require('../models/distributor.model');
const UserModel = require('../models/user.model');
const ProductModel = require('../models/product.model');
const ChannelModel = require('../models/Channel.model');
const ScheduleModel = require('../models/Schedule.model');

DistributorModel.hasMany(UserModel, { as: 'user', foreignKey: 'distributorCode'});
UserModel.belongsTo(DistributorModel, { as: 'distributor'});

DistributorModel.hasMany(ProductModel, { as: 'product', foreignKey: 'distributorCode'});
ProductModel.belongsTo(DistributorModel, { as: 'distributor'});

DistributorModel.hasMany(ChannelModel, { as: 'channel', foreignKey: 'distributorCode'});
ChannelModel.belongsTo(DistributorModel, { as: 'distributor'});

DistributorModel.hasMany(ScheduleModel, { as: 'schedule', foreignKey: 'distributorCode'});
ScheduleModel.belongsTo(DistributorModel, { as: 'distributor'});
