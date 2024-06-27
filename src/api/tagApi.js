import request from "@/utils/request";

export function getTagCount() {
    return request.get('/tag/count')
}

