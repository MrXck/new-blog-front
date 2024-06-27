import request from "@/utils/request";

export function getAll() {
    return request.get("/category/all")
}

export function getCategoryCount() {
    return request.get('/category/count')
}

