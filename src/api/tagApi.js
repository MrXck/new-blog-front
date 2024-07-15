import request from "@/utils/request";

export function getTagCount() {
    return request.get('/tag/count')
}

export function getAllTag() {
    return request.get('/tag/all')
}
