import api from "./axios"


type ProjectProps = {
    title: string,
    description: string,
    technologies: string[],
    repository: string,
    website: string,
}


const projectApi = {

    getAll: async () => {
        try {
            const res = await api.get("/project/getAll")

            return res;
        } catch(error) {
            return error;
        }
    },

    findOne: async (id: string) => {
        try {
            const res = await api.get(`/project/${id}`);

            return res;
        } catch(error: any) {
            return { status: error.response.status };
        }
    },

    create: async (token: string, data: ProjectProps) => {
        try {
            const res = await api.post('/project/create', data, {
                headers: {
                    'jnm.token': token
                }
            });

            return res;
        } catch(error: any) {
            return { status: error.response.status };
        }
    }

}



export default projectApi