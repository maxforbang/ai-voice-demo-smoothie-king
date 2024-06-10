export async function callSquad(number) {
  const url = 'https://api.vapi.ai/call/phone'
  const authToken = '01eed121-d36f-4fd0-a14a-1115a1ba99ea'
  
  const phoneNumber = `+1${number.replace(/\D/g, '').slice(-10)}`;

  const body = {
    phoneNumberId: 'b8b48e42-f36f-48d4-9990-cc8bba71549e',
    customer: {
      number: phoneNumber,
    },
    squad: {
      members: [
        {
          assistantId: 'af30bb06-6368-4b7f-b144-47e26d69e888',
          assistantDestinations: [
            {
              type: 'assistant',
              assistantName: 'The Joint | Current Client',
              message: 'Okay.',
              description:
                'Transfer if the user indicates they are an existing patient.',
            },
            {
              type: 'assistant',
              assistantName: 'The Joint | New Client',
              message: 'Okay.',
              description:
                'Transfer if the user indicates they are not an existing patient.',
            },
          ],
        },
        {
          assistantId: '8f6e5b32-40dd-431a-99d5-b77b6ffc439e',
        },
        {
          assistantId: 'bd3221d0-6a26-43f9-a994-e055e54b1bfb',
        },
      ],
    },
  }

  console.log('hi')

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
