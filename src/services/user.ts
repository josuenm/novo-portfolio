import api from "./axios";









const userApi = {

    login: async (data: { email: string, password: string }) => {

        try {
            const res = await api.post('/dashboard/login', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            return res;
        } catch (error: any) {
            return { status: error.response.status };
        }

    }

}

export default userApi;