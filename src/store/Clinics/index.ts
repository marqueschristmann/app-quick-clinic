import { GET_CLINICS } from '../../constants/endpoints';
import { Clinic } from '../../entities/Clinic';
import api from '../../services/api';

export async function fetchAllClinics(): Promise<Clinic[]> {
  const response = await api.get(GET_CLINICS);
  return response.data;
}
