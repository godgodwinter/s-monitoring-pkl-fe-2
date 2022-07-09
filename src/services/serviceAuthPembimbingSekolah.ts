import { useStoreAdminAuthPembimbingSekolah } from '@/stores/adminAuthPembimbingSekolah';
import Api from "@/axios/axiosPembimbingSekolah";
import Toast from "@/components/lib/Toast"
const storeAdminAuthPembimbingSekolah = useStoreAdminAuthPembimbingSekolah();

// const dataAsli = computed(() => storeAdminAuth.getData);

const doLogin = async (email: string, password: string): Promise<boolean | undefined> => {
    try {
        const response = await Api.post(`pembimbingsekolah/auth/login`, {
            email: email,
            password,
        });

        let token = response.data.token;
        // console.log(token);
        if (token) {
            localStorage.setItem("tokenPembimbingSekolah", token);
            localStorage.setItem("isLoginPembimbingSekolah", true);
            storeAdminAuthPembimbingSekolah.setToken(token);
            storeAdminAuthPembimbingSekolah.setIsLogin(true);
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
        // console.log(token);

        const response = await Api.post(`pembimbingsekolah/auth/refresh`, {
            token: token
        });
        // console.log(response.hasOwnProperty("data"));
        if (response.hasOwnProperty("data")) {
            let newToken = response.data.token;
            localStorage.setItem("tokenPembimbingSekolah", newToken);
            storeAdminAuthPembimbingSekolah.setToken(newToken);

            // let dataMe = {
            //     id: response.data.me.id,
            //     name: response.data.me.name,
            // };
            // storeAdminAuthPembimbingSekolah.setMe(dataMe);
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
        localStorage.removeItem("tokenPembimbingSekolah");
        localStorage.removeItem("isLoginPembimbingSekolah");
        storeAdminAuthPembimbingSekolah.setToken("");
        storeAdminAuthPembimbingSekolah.setIsLogin(false);
        if (alert) {
            Toast.success("Info", "Logout berhasil!");
        }
        return true;
    } catch (error) {
        console.error(error);
    }
}


const serviceAuthPembimbingSekolah = {
    doLogin,
    doCheckToken,
    doLogout
};
export default serviceAuthPembimbingSekolah;