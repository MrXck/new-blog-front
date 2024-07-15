import request from "@/utils/request";

export function getPhotoAlbumPhotoListByPage(id, data) {
    return request.post(`/photo/pageByPhotoAlbum/${id}`, data)
}
