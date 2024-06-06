import mongoose from 'mongoose';

const Data = new mongoose.Schema({
  Name:{type: String},
  Email:{type: String},
  Phone:{type: String},
  From:{ type: String },
  To:{ type: String },
  Type:{ type: String },
  ReturnAt:{ type: String },
  PickUp:{ type: Date },
  PickUpAt:{ type: String},
  Car:{type: String},
 
});

const PostSchema = mongoose.model('Info', Data);

export default PostSchema;