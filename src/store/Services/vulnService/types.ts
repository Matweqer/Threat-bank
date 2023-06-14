interface IVulnInService {
  id: number
  name: string
}

export interface ISfcWithVulnerabilities {
  id: number
  name: string
  version: string
  sfc_type: {
    id: number
    name: string
  }
  vulnerabilities: IVulnInService[]
}

export interface ISfcWithVulnerabilitiesResponse {
  count: number
  next: string | null
  previous: string | null
  results: ISfcWithVulnerabilities[]
}
