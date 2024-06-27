import request from "@/utils/request";

export function getWebsiteConfigApi() {
    return request.get('/websiteConfig/all')
}
