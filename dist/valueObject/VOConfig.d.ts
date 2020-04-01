export declare type UserInfo = {
    user: string;
    auth_key: string;
    project_id: string;
    crawl_id?: number;
};
export declare class VOConfig {
    private userConf;
    static load(fileName: string): VOConfig | undefined;
    private constructor();
    toJson(): UserInfo;
}
