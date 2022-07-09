import { useStoreAdminAuth } from '@/stores/adminAuth';
import Api from "@/axios/axios";
import Toast from "@/components/lib/Toast"
const storeAdminAuth = useStoreAdminAuth();

// const dataAsli = computed(() => storeAdminAuth.getData);

const doLogin = async (email: string, password: string): Promise<boolean | undefined> => {
    try {
        const response = await Api.post(`pembimbinglapangan/auth/login`, {
            email: email,
            password,
        });

        let token = response.data.token;
        console.log(token);
        if (token) {
            localStorage.setItem("token", token);
            localStorage.setItem("isLogin", true);
            storeAdminAuth.setToken(token);
            storeAdminAuth.setIsLogin(true);
            // console.log("login berhasil");
            // console.log(response.message);
            Toast.success("Info", "Login berhasil!");

        } else {
            // console.log("login gagal");
            // console.log(response.message);
            Toast.danger("Error", "Login gagal!");
        }

        return true;
    } catch (error) {
        Toast.danger("Error", "Login gagal!");

        console.error(error);
    }
};

const doCheckToken = async (token: string): Promise<boolean | undefined> => {
    try {
        const response = await Api.post(`pembimbinglapangan/auth/refresh`, {
            token: token
        });
        // console.log(response.hasOwnProperty("data"));
        if (response.hasOwnProperty("data")) {
            let newToken = response.data.token;
            localStorage.setItem("token", newToken);
            storeAdminAuth.setToken(newToken);

            // let dataMe = {
            //     id: response.data.me.id,
            //     name: response.data.me.name,
            // };
            // storeAdminAuth.setMe(dataMe);
            // console.log(dataMe);

            return true;
        } else {
            return false;
        }
    } catch (error) {
        // Toast.danger("Error", `Gagal menghubungkan ke Server!`);
        console.error(error);
        return false;
    }
}

const doLogout = async (alert: boolean = true): Promise<boolean | undefined> => {
    try {
        localStorage.removeItem("token");
        localStorage.removeItem("isLogin");
        storeAdminAuth.setToken("");
        storeAdminAuth.setIsLogin(false);
        if (alert) {
            Toast.success("Info", "Logout berhasil!");
        }
        return true;
    } catch (error) {
        console.error(error);
    }
}


const serviceAuth = {
    doLogin,
    doCheckToken,
    doLogout
};
export default serviceAuth;