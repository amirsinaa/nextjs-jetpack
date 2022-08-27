import { CreateCacheOptions } from "@/modules/core/rtl-provider/types/create-cache-options";
import { RtlProviderProps } from "@/modules/core/rtl-provider/types/rtl-provider-props";
import stylisPluginRtl from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useRouter } from "next/router";

const options: CreateCacheOptions = {
  rtl: { key: "css-fa", stylisPlugins: [stylisPluginRtl as any] },
  ltr: { key: "css-en" },
};

export function RtlProvider(props: RtlProviderProps) {
  const { locale } = useRouter();

  const { children } = props;
  const direction = locale == "en" ? "ltr" : "rtl";

  return (
    <CacheProvider value={createCache(options[direction])}>
      {children}
    </CacheProvider>
  );
}
