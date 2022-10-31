import { DateTime } from 'luxon'

const parseTimestamp = (ISO_DATE) => {
	const { day, month, year } = DateTime.fromISO(ISO_DATE)

	return `${day}.${month}.${year}`
}

export { parseTimestamp }
