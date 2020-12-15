const ffmpegController = require('./ffmpegController');

module.exports = {
    instaRegister: async(req, res)=>{
        const {originDatas, resizedDats} = req.body;
        const originKeys = Object.keys(originDatas);
        originKeys.forEach(async (key)=>{
            if(originDatas[key].category == "video"){
                const ffmpegResult = await ffmpegController.createPreviewVideo(originDatas[key].url);
                const thumbVid = ffmpegResult["Location"];
                resizedDatas[key] = {
                    category: "video",
                    url: `${thumbVid}`
                };
            }
        });
        return res.send(resizedDats);
    }
}