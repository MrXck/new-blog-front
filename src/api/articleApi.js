import request from "@/utils/request";

export function getNewArticle() {
    return request.get("/article/getNew")
}

export function getNewFeatured() {
    return request.get("/article/getNewFeatured")
}

export function getArticleByPage(data) {
    return request.post("/article/page", data)
}
