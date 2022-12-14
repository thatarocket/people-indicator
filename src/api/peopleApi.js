import api from './default';

const getPeople = async () => {
    const response = await api.get('/people');
    return response.data;
}

const getPerson = async (id) => {
    const response = await api.get(`/people/${id}`);
    return response.data;
}

const addPerson = async (request) => {
    await api.post("/people",request);
}

const deletePerson = async (id) => {
    await api.delete(`/people/${id}`); 
}

const editPerson = async (personToEdit) => {
    await api.put(`/people/${personToEdit.id}`, personToEdit);
}

export {getPeople, getPerson, addPerson, deletePerson,editPerson};