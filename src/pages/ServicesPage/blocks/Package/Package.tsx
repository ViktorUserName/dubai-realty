import React, { FC } from 'react';
import s from "./Package.module.scss";

const Package: FC = () => {
    return (
        <table cellSpacing="0" className={s.packageContent}>
            <tr className={s.packageContentTitle}>
                <th>Included in the package</th>
                <th>Complete management</th>
                <th>Partial control</th>
            </tr>
            <tr>
                <td>
                Real estate advertising
                </td>
                <td>
                ✓
                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                Search for tenants
                </td>
                <td>
                    ✓
                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                Conclusion of a lease agreement
                </td>
                <td>
                ✓
                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                Getting paid
                </td>
                <td>
                ✓
                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                Key handover
                </td>
                <td>
                ✓
                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                Payment processing
                </td>
                <td>
                ✓
                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                Dealing with repair requests
                </td>
                <td>
                ✓
                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                DEWA connection (electricity/water)
                </td>
                <td>
                ✓
                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                Registration of the rental agreement Ejari
                </td>
                <td>
                ✓
                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                Separate administrator
                </td>
                <td>
                ✓
                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                Detailed inspection of the object
                </td>
                <td>
                
                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                Property preparation before arrival
                </td>
                <td>

                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                Reporting
                </td>
                <td>

                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                Repair Request Management
                </td>
                <td>

                </td>
                <td>
                ✓
                </td>
            </tr>
            <tr>
                <td>
                Repair management
                </td>
                <td>

                </td>
                <td>
                ✓
                </td>
            </tr>
        </table>
    );
};

export default Package;