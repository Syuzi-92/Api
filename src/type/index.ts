export interface Requests {
    args: Args;
    headers: Headers;
    origin: string;
    url: string;
}

export interface Args {
}

export interface Headers {
    Accept: string;
    "Accept-Encoding": string;
    "Accept-Language": string;
    Host: string;
    "Sec-Ch-Ua": string;
    "Sec-Ch-Ua-Mobile": string;
    "Sec-Ch-Ua-Platform": string;
    "Sec-Fetch-Dest": string;
    "Sec-Fetch-Mode": string;
    "Sec-Fetch-Site": string;
    "Sec-Fetch-User": string;
    "Upgrade-Insecure-Requests": string;
    "User-Agent": string;
    "X-Amzn-Trace-Id": string;
}