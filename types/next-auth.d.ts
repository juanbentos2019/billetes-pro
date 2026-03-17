import "next-auth";

declare module "next-auth" {
    interface User {
        id: string;
        role: string;
        empresaId: string | null;
        empresaNombre: string | null;
        empresaVencimiento?: string | null;
        loginToken?: string | null;
        isImpersonating?: boolean;
        originalRole?: string;
    }

    interface Session {
        error?: string;
        user: User & {
            id: string;
            role: string;
            empresaId: string | null;
            empresaNombre: string | null;
            empresaVencimiento?: string | null;
            isImpersonating?: boolean;
            originalRole?: string;
        }
    }
}
