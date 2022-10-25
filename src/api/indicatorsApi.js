import api from './default';

const getIndicators = async () => {
    const response = await api.get('/indicators');
    return response.data;
}

const addIndicator = async (request) => {
    await api.post('/indicators', request);
}

const deleteIndicator = async (id) => {
    await api.delete(`/indicators/${id}`); 
}

const editIndicator = async (indicatorToEdit) => {
    await api.put(`/indicators/${indicatorToEdit.id}`, indicatorToEdit);
}


export {getIndicators,addIndicator,deleteIndicator,editIndicator};