import axios from "axios";

export default class TeledoceService {
  // Variables de entorno

  async getNews(params = "") {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
    try {
      const { data } = await axios.get(
        `https://www.teledoce.com/wp-json/wp/v2/posts?per_page=42&${params}`,
        {
          cancelToken: source.token,
        }
      );
      return data;
    } catch (error) {
      if (axios.isCancel(error)) {
        return "axios request cancelled";
      }
      return error;
    }
  }

  async getFeatureMediaById(id) {
    console.log('servicio con imagen')
    const response = await axios.get(
      `https://www.teledoce.com/wp-json/wp/v2/media/${id}`
    );
    return response.data;
  }

  async getNewById(id) {
    const response = await axios.get(
      `https://www.teledoce.com/wp-json/wp/v2/posts/${id}`
    );
    return response.data;
  }

  async getCategories() {
    const response = await axios.get(
      "https://www.teledoce.com/wp-json/wp/v2/categories?per_page=20&orderby=count&order=desc"
    );
    return response.data;
  }
}
