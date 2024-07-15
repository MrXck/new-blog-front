import request from "@/utils/request";


export function getArticleByTagId(id, data) {
    return request.post(`/articleTag/getArticleByTagId/${id}`, data)
}
