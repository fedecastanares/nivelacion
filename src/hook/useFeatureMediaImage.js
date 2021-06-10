import TeledoceService from "../service/TeledoceService"


const getFeatureMediaById = async (id) => {
    const _teledoceService = new TeledoceService();
    const response = await _teledoceService.getFeatureMediaById(id);
    return response;
}


export default getFeatureMediaById;