import request from "@/utils/request";

export function getPhotoAlbumListByPage(data) {
    return request.post('/photoAlbum/page', data)
}

