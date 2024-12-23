import React, { useCallback } from 'react'
import { Option } from './content-based-on-title'
import { ConnectionProviderProps } from '@/providers/connection-providers'

type Props = {
    currentService: string
    nodeConnection: ConnectionProviderProps
    channels?: Option[]
    setChannels?: (value: Option[]) => void
  }
  const ActionButton = ({
    currentService,
    nodeConnection,
    channels,
    setChannels,
  }: Props) => {
    return <>
    <h1>Action</h1>
    </>
  }
  export default ActionButton