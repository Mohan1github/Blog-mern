const express = require("express")
const blogrouter = express.Router()
const { getblogs, searchblogs, deleteblog, editblog, createblog, getblogbyid, blogfilter,likes,unlikes,myblogs } = require("../controllers/blogcontroller")
const { verifylogin } = require("../utils/verify")
blogrouter.get("/getblogs", getblogs)
blogrouter.post("/searchblogs/:query", searchblogs)
blogrouter.delete("/deleteblogs/:id", verifylogin, deleteblog)
blogrouter.put("/editing-blogs/:id", verifylogin, editblog)
blogrouter.post("/createblogs", createblog)
blogrouter.put("/likeblog",likes)
blogrouter.put("/unlikeblog",unlikes)
blogrouter.get("/get-blogsby-id/:id", getblogbyid)
blogrouter.post("/get-filtered-blogs", blogfilter)
blogrouter.get("/get_myblogs", verifylogin, myblogs)
module.exports = { blogrouter }
