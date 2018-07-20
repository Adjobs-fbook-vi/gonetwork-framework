// this is very minimal - only what we needed right now

export type Config = {
  hostname: string
  mqttPort: number
  ethPort: number
  masterPort: number
  autoDeployContracts: boolean
  blockTime: number // in Milliseconds, ganache-core allows undefined as well
}

// it is used for tests running on local machine
const defaultConfig: Readonly<Config> = {
  hostname: 'localhost',
  mqttPort: 1884,
  ethPort: 8546,
  masterPort: 5215,
  autoDeployContracts: true,
  blockTime: 50
}

const withDefault: (c?: Partial<Config>) => Config = c => {
  console.log('C', c)
  return Object.assign({}, defaultConfig, c)
}

export const config = (name?: string) =>
  withDefault(name && require(`./${name}`).config)

export const configFromArgv = () => config(process.argv[2])
