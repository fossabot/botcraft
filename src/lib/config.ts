/* eslint-disable @typescript-eslint/no-invalid-void-type */
import { Option as O, Task } from "ftld"
import type { UseStore } from "idb-keyval"
import { clear, createStore, del, delMany, get, getMany, keys, set, setMany } from "idb-keyval"
import { zipObj } from "rambda"

export type ConfigManagerProps<T> = {
    name: string
    parse: (data: unknown) => T
}

export class ConfigManager<T> {
    parse: (data: unknown) => T

    #store: UseStore

    private constructor({ name, parse }: ConfigManagerProps<T>) {
        this.#store = createStore("config", name)
        this.parse = parse
    }

    static make<T>(props: ConfigManagerProps<T>) {
        return new ConfigManager(props)
    }

    async getConfig<K extends Extract<keyof T, string>>(key: K) {
        const val: T[K] | undefined = await get(key, this.#store)
        return O.from(val)
    }

    setConfig<K extends Extract<keyof T, string>>(key: K, value: T[K]) {
        return Task.from<void, Error>(() => set(key, value, this.#store)).run()
    }

    setConfigMany(data: Partial<T>) {
        return Task.from<void, Error>(() => setMany(Object.entries(data), this.#store)).run()
    }

    deleteConfig<K extends Extract<keyof T, string>>(key: K) {
        return Task.from<void, Error>(() => del(key, this.#store)).run()
    }

    deleteConfigMany(keys: Extract<keyof T, string>[]) {
        return Task.from<void, Error>(() => delMany(keys, this.#store)).run()
    }

    loadConfig() {
        const load = async () => {
            const keyList = await keys<string>(this.#store)
            const valList = await getMany<T[keyof T]>(keyList, this.#store)
            return this.parse(zipObj(keyList, valList))
        }
        return Task.from(load).run()
    }

    resetConfig() {
        return Task.from<void, Error>(() => clear(this.#store)).run()
    }
}
