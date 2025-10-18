document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('audit-history-body');

    // This function fetches the local JSON file and populates the table
    async function loadAuditData() {
        try {
            // Fetch data from the 'report.json' file in the same directory
            const response = await fetch('report.json');

            if (!response.ok) {
                throw new Error(`Failed to load report.json. Status: ${response.status}`);
            }

            const auditData = await response.json();

            tableBody.innerHTML = ''; // Clear existing rows

            // Loop through the rules and create table rows
            auditData.rules.forEach(rule => {
                const row = document.createElement('tr');
                row.className = 'border-b border-gray-700 hover:bg-gray-600 transition-colors duration-200';

                let statusHtml = '';
                switch (rule.action.toLowerCase()) {
                    case 'alert':
                        statusHtml = `<span class="px-2 py-1 font-semibold leading-tight text-red-100 bg-red-700 rounded-full">Alert</span>`;
                        break;
                    case 'remediated':
                        statusHtml = `<span class="px-2 py-1 font-semibold leading-tight text-green-100 bg-green-700 rounded-full">Remediated</span>`;
                        break;
                    default:
                        statusHtml = `<span class="px-2 py-1 font-semibold leading-tight text-blue-100 bg-blue-700 rounded-full">Reported</span>`;
                        break;
                }

                const formattedTimestamp = new Date(rule.timestamp).toLocaleString();

                row.innerHTML = `
                    <td class="p-4"></td>
                    <td class="px-6 py-4 font-medium whitespace-nowrap">${rule.id}</td>
                    <td class="px-6 py-4">${rule.description}</td>
                    <td class="px-6 py-4 capitalize">${rule.action}</td>
                    <td class="px-6 py-4">${rule.user}</td>
                    <td class="px-6 py-4">${formattedTimestamp}</td>
                    <td class="px-6 py-4">${statusHtml}</td>
                `;
                tableBody.appendChild(row);
            });

        } catch (error) {
            tableBody.innerHTML = `<tr><td colspan="7" class="text-center py-10 text-red-400">${error.message}</td></tr>`;
            console.error('Error fetching audit data:', error);
        }
    }

    loadAuditData();
});
