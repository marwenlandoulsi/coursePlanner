'use strict';

import mongoose from 'mongoose';

var SyllabusSchema = new mongoose.Schema({
  academy: String,
  year: Number,
  title: String,
  education: String,
  lecturer: String,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  objectives: String,
  iconurl: String,
  weekplans: [{
    week: Number,
    summary: String,
    topics: String,
    literature: String,
    videos: String,
    assignments: String,
    teaser: String
  }]
});

export default mongoose.model('Syllabus', SyllabusSchema);
