import axios from 'axios';
import type { NewNote, Note } from '../types/note';
interface AxiosNotesResponse {
  notes: Note[];
  totalPages: number;
}
const ITEMS_PER_PAGE = 12;
const baseURL = process.env.NEXT_PUBLIC_API_URL+'/api';
export const nextServer = axios.create({
  baseURL: baseURL,
 
});
export const fetchNotes = async (
  query: string,
  page: number,
  tag?: string
): Promise<AxiosNotesResponse> => {
  const response = await nextServer.get<AxiosNotesResponse>('/notes', {
    params: {
      page,
      perPage: ITEMS_PER_PAGE,
      ...(query.trim() ? { search: query } : {}),
      tag: tag === 'all' || !tag ? undefined : tag,
    },
  });
  return response.data;
};
export const createNote = async (note: NewNote): Promise<Note> => {
  const response = await nextServer.post<Note>('/notes', note);
  return response.data;
};
export const deleteNote = async (id: string): Promise<Note> => {
  const response = await nextServer.delete<Note>(`/notes/${id}`);
  return response.data;
};
export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await nextServer.get<Note>(`/notes/${id}`);
  return response.data;
};
