import request from "@/utils/request";

export function getAll() {
    return request.get("/category/all")
}

