export async function callSquad(number) {
  const url = 'https://api.vapi.ai/call'
  const authToken = '85ad635f-00d3-4bb3-ac02-732796d36229'
  
  const phoneNumber = `+1${number.replace(/\D/g, '').slice(-10)}`;

  const body = {
    phoneNumberId: '2d619f23-41c1-40b8-b119-98b119d89af8',
    assistantId: '9e8ae25a-fbe4-4689-91af-441f5bead0d3', // Smoothie King
    customer: {
      number: phoneNumber,
    },
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    const data = await response.json()
    console.log('Response:', data)
  } catch (error) {
    console.error('Error:', error)
  }
}
