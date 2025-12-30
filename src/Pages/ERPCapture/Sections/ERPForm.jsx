import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, Building2, AlertCircle, Package, DollarSign, Download } from 'lucide-react';
import PrimaryBtn from '../../../Components/PrimartyBtn';
import BottomLine from '../../../Components/BottomLine';

export default function ERPForm() {
  const [currentStage, setCurrentStage] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '', plantLocations: '', industryType: '', contactPerson: '',
    designation: '', phone: '', email: '', manufacturingType: [],
    numberOfMachines: '', numberOfShifts: '', approxManpower: '',
    currentSystem: [], otherERP: '', painPoints: [], otherPainPoint: '',
    productionJobCards: '', productionType: '', rejectionTracking: '',
    rawMaterialTracking: '', barcodeRequired: '', lotTracking: '',
    orderTracking: '', deliverySchedule: '', invoiceIntegration: '',
    dailyReport: false, shiftReport: false, machineEfficiency: false, dashboard: false,
    numberOfUsers: '', numberOfPlants: '', deployment: '',
    customFeatures: '', goLiveTimeline: '', leadStatus: 'New', priority: 'Medium'
  });

  const stages = [
    { num: 1, title: 'Basic Inquiry', icon: Building2 },
    { num: 2, title: 'Pain Points', icon: AlertCircle },
    { num: 3, title: 'Module Requirements', icon: Package },
    { num: 4, title: 'Commercial Details', icon: DollarSign }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const nextStage = () => { if (currentStage < 4) setCurrentStage(currentStage + 1); };
  const prevStage = () => { if (currentStage > 1) setCurrentStage(currentStage - 1); };

  const exportAsText = () => {
    let text = '=== ERP CUSTOMER REQUIREMENT CAPTURE ===\n\n';
    text += '--- STAGE 1: BASIC INQUIRY DETAILS ---\n';
    text += `Company Name: ${formData.companyName}\nPlant Locations: ${formData.plantLocations}\n`;
    text += `Industry Type: ${formData.industryType}\nContact Person: ${formData.contactPerson} (${formData.designation})\n`;
    text += `Phone: ${formData.phone}\nEmail: ${formData.email}\n`;
    text += `Manufacturing Type: ${formData.manufacturingType.join(', ')}\n`;
    text += `Number of Machines: ${formData.numberOfMachines}\nNumber of Shifts: ${formData.numberOfShifts}\n`;
    text += `Approx. Manpower: ${formData.approxManpower}\n\n`;
    text += '--- STAGE 2: CURRENT SYSTEM & PAIN POINTS ---\n';
    text += `Current System: ${formData.currentSystem.join(', ')}\n`;
    if (formData.otherERP) text += `ERP Name: ${formData.otherERP}\n`;
    text += `Pain Points: ${formData.painPoints.join(', ')}\n`;
    if (formData.otherPainPoint) text += `Other Pain Point: ${formData.otherPainPoint}\n\n`;
    text += '--- STAGE 3: MODULE REQUIREMENTS ---\n';
    text += `Job Cards: ${formData.productionJobCards}\nProduction Type: ${formData.productionType}\n`;
    text += `Rejection Tracking: ${formData.rejectionTracking}\nRaw Material Tracking: ${formData.rawMaterialTracking}\n`;
    text += `Barcode: ${formData.barcodeRequired}\nLot/Batch Tracking: ${formData.lotTracking}\n`;
    text += `Order Tracking: ${formData.orderTracking}\nDelivery Schedule: ${formData.deliverySchedule}\n`;
    text += `Invoice Integration: ${formData.invoiceIntegration}\n`;
    text += `Reports: ${[formData.dailyReport && 'Daily', formData.shiftReport && 'Shift', formData.machineEfficiency && 'Machine', formData.dashboard && 'Dashboard'].filter(Boolean).join(', ')}\n\n`;
    text += '--- STAGE 4: COMMERCIAL & CUSTOMIZATION ---\n';
    text += `Users: ${formData.numberOfUsers}\nPlants: ${formData.numberOfPlants}\nDeployment: ${formData.deployment}\n`;
    text += `Custom Features: ${formData.customFeatures}\nGo-Live: ${formData.goLiveTimeline}\n`;
    text += `Lead Status: ${formData.leadStatus}\nPriority: ${formData.priority}\n`;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${formData.companyName || 'customer'}_requirements.txt`;
    link.click();
  };

  const submitToGoogleSheets = async () => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzIoB-5Lsi6ScsnnEHQeOM6n3V6Vv5mLP6PM6wO_0hFeVAEO8IercUceTsb9hM3zs07og/exec';
    try {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hidden_iframe';
      document.body.appendChild(iframe);
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_SCRIPT_URL;
      form.target = 'hidden_iframe';
      const fields = {
        companyName: formData.companyName, plantLocations: formData.plantLocations,
        industryType: formData.industryType, contactPerson: formData.contactPerson,
        designation: formData.designation, phone: formData.phone, email: formData.email,
        manufacturingType: formData.manufacturingType.join(', '),
        numberOfMachines: formData.numberOfMachines, numberOfShifts: formData.numberOfShifts,
        approxManpower: formData.approxManpower, currentSystem: formData.currentSystem.join(', '),
        otherERP: formData.otherERP, painPoints: formData.painPoints.join(', '),
        otherPainPoint: formData.otherPainPoint, productionJobCards: formData.productionJobCards,
        productionType: formData.productionType, rejectionTracking: formData.rejectionTracking,
        rawMaterialTracking: formData.rawMaterialTracking, barcodeRequired: formData.barcodeRequired,
        lotTracking: formData.lotTracking, orderTracking: formData.orderTracking,
        deliverySchedule: formData.deliverySchedule, invoiceIntegration: formData.invoiceIntegration,
        reportsRequired: [formData.dailyReport && 'Daily', formData.shiftReport && 'Shift',
          formData.machineEfficiency && 'Machine', formData.dashboard && 'Dashboard'].filter(Boolean).join(', '),
        numberOfUsers: formData.numberOfUsers, numberOfPlants: formData.numberOfPlants,
        deployment: formData.deployment, customFeatures: formData.customFeatures,
        goLiveTimeline: formData.goLiveTimeline, leadStatus: formData.leadStatus, priority: formData.priority
      };
      Object.keys(fields).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key] || '';
        form.appendChild(input);
      });
      document.body.appendChild(form);
      form.submit();
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        setSubmitStatus({ type: 'success', message: 'Thank you! Your requirements have been submitted successfully. Our team will contact you shortly.' });
        setIsSubmitting(false);
      }, 1500);
    } catch (error) {
        console.log(error);
        
      setSubmitStatus({ type: 'error', message: 'There was an error submitting your data. Please try downloading instead or contact us directly.' });
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container py-20 relative">
      {/* Progress Indicator */}
      <div className="bg-[#464646]/50 backdrop-blur-md rounded-lg p-6 mb-10 border border-primary/20">
        <div className="flex justify-between items-center">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = currentStage === stage.num;
            const isCompleted = currentStage > stage.num;
            return (
              <React.Fragment key={stage.num}>
                <div className="flex flex-col items-center flex-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    isCompleted ? 'bg-primary text-black' : isActive ? 'bg-primary text-black scale-110' : 'bg-gray-700 text-gray-400'
                  }`}>
                    {isCompleted ? <CheckCircle className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                  </div>
                  <span className={`text-xs md:text-sm text-center font-bold font-Bai_Jamjuree ${isActive ? 'text-primary' : 'text-white'}`}>
                    {stage.title}
                  </span>
                </div>
                {idx < stages.length - 1 && (
                  <div className={`flex-1 h-1 mx-2 rounded transition-all duration-300 ${currentStage > stage.num ? 'bg-primary' : 'bg-gray-700'}`} />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-[#464646]/50 backdrop-blur-md rounded-lg p-6 md:p-10 mb-10 border border-primary/20">
        {/* Stage 1 */}
        {currentStage === 1 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-Bai_Jamjuree text-primary mb-2">Stage 1: Basic Inquiry Details</h2>
              <p className="text-gray-300 mb-4">Pre-qualification information to understand your business</p>
              <BottomLine />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Company Name *</label>
                <input type="text" value={formData.companyName} onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="input-style w-full" placeholder="Enter company name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Plant Locations *</label>
                <input type="text" value={formData.plantLocations} onChange={(e) => handleInputChange('plantLocations', e.target.value)}
                  className="input-style w-full" placeholder="e.g., Mumbai, Pune" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Industry Type *</label>
                <select value={formData.industryType} onChange={(e) => handleInputChange('industryType', e.target.value)} className="input-style w-full">
                  <option value="">Select industry</option>
                  <option value="Plastic">Plastic</option>
                  <option value="Pharma">Pharma</option>
                  <option value="Textile">Textile</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Food & Beverage">Food & Beverage</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Chemical">Chemical</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Contact Person *</label>
                <input type="text" value={formData.contactPerson} onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  className="input-style w-full" placeholder="Full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Designation</label>
                <input type="text" value={formData.designation} onChange={(e) => handleInputChange('designation', e.target.value)}
                  className="input-style w-full" placeholder="e.g., Production Manager" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Phone *</label>
                <input type="tel" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="input-style w-full" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-white mb-2">Email *</label>
                <input type="email" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)}
                  className="input-style w-full" placeholder="email@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-3">Type of Manufacturing *</label>
              <div className="space-y-2">
                {['Discrete', 'Process', 'Batch'].map(type => (
                  <label key={type} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" checked={formData.manufacturingType.includes(type)}
                      onChange={() => handleCheckboxChange('manufacturingType', type)}
                      className="w-5 h-5 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary focus:ring-2" />
                    <span className="text-white">{type}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Number of Machines</label>
                <input type="number" value={formData.numberOfMachines} onChange={(e) => handleInputChange('numberOfMachines', e.target.value)}
                  className="input-style w-full" placeholder="e.g., 15" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Number of Shifts</label>
                <select value={formData.numberOfShifts} onChange={(e) => handleInputChange('numberOfShifts', e.target.value)} className="input-style w-full">
                  <option value="">Select</option>
                  <option value="1">1 Shift</option>
                  <option value="2">2 Shifts</option>
                  <option value="3">3 Shifts</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Approx. Manpower</label>
                <input type="number" value={formData.approxManpower} onChange={(e) => handleInputChange('approxManpower', e.target.value)}
                  className="input-style w-full" placeholder="e.g., 50" />
              </div>
            </div>
          </div>
        )}

        {/* Stage 2 */}
        {currentStage === 2 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-Bai_Jamjuree text-primary mb-2">Stage 2: Current System & Pain Points</h2>
              <p className="text-gray-300 mb-4">Help us understand your challenges to position our ERP value</p>
              <BottomLine />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-3">Currently Using *</label>
              <div className="space-y-2">
                {['Excel', 'Tally', 'Any ERP', 'Fully Manual'].map(system => (
                  <label key={system} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" checked={formData.currentSystem.includes(system)}
                      onChange={() => handleCheckboxChange('currentSystem', system)}
                      className="w-5 h-5 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary focus:ring-2" />
                    <span className="text-white">{system}</span>
                  </label>
                ))}
              </div>
            </div>
            {formData.currentSystem.includes('Any ERP') && (
              <div>
                <label className="block text-sm font-medium text-white mb-2">Which ERP?</label>
                <input type="text" value={formData.otherERP} onChange={(e) => handleInputChange('otherERP', e.target.value)}
                  className="input-style w-full" placeholder="ERP name" />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-white mb-3">Major Problems Facing *</label>
              <div className="space-y-2">
                {['Production planning issues', 'Inventory mismatch', 'Wastage not tracked', 'Delays in reporting',
                  'Dependency on staff', 'Quality control issues', 'Manual data entry errors'].map(problem => (
                  <label key={problem} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" checked={formData.painPoints.includes(problem)}
                      onChange={() => handleCheckboxChange('painPoints', problem)}
                      className="w-5 h-5 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary focus:ring-2" />
                    <span className="text-white">{problem}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Other Pain Points</label>
              <textarea value={formData.otherPainPoint} onChange={(e) => handleInputChange('otherPainPoint', e.target.value)}
                className="input-style w-full" rows="4" placeholder="Describe any other challenges..." />
            </div>
          </div>
        )}

        {/* Stage 3 */}
        {currentStage === 3 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-Bai_Jamjuree text-primary mb-2">Stage 3: Module Requirement Mapping</h2>
              <p className="text-gray-300 mb-4">Identify specific features your business needs</p>
              <BottomLine />
            </div>
            {/* Production Module */}
            <div className="border-l-4 border-primary pl-6 space-y-6">
              <h3 className="text-xl font-bold text-primary font-Bai_Jamjuree">Production Module</h3>
              <div>
                <label className="block text-sm font-medium text-white mb-3">Job Cards Required?</label>
                <div className="flex flex-wrap gap-4">
                  {['Yes', 'No', 'Not Sure'].map(option => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="jobCards" checked={formData.productionJobCards === option}
                        onChange={() => handleInputChange('productionJobCards', option)}
                        className="w-5 h-5 text-primary bg-gray-700 border-gray-600 focus:ring-primary focus:ring-2" />
                      <span className="text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Production Type</label>
                <select value={formData.productionType} onChange={(e) => handleInputChange('productionType', e.target.value)} className="input-style w-full">
                  <option value="">Select</option>
                  <option value="Batch-wise">Batch-wise</option>
                  <option value="Order-wise">Order-wise</option>
                  <option value="Both">Both</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-3">Rejection & Wastage Tracking?</label>
                <div className="flex gap-4">
                  {['Yes', 'No'].map(option => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="rejection" checked={formData.rejectionTracking === option}
                        onChange={() => handleInputChange('rejectionTracking', option)}
                        className="w-5 h-5 text-primary bg-gray-700 border-gray-600 focus:ring-primary focus:ring-2" />
                      <span className="text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {/* Inventory Module */}
            <div className="border-l-4 border-primary pl-6 space-y-6">
              <h3 className="text-xl font-bold text-primary font-Bai_Jamjuree">Inventory Module</h3>
              <div>
                <label className="block text-sm font-medium text-white mb-3">Raw Material Tracking?</label>
                <div className="flex gap-4">
                  {['Yes', 'No'].map(option => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="rawMaterial" checked={formData.rawMaterialTracking === option}
                        onChange={() => handleInputChange('rawMaterialTracking', option)}
                        className="w-5 h-5 text-primary bg-gray-700 border-gray-600 focus:ring-primary focus:ring-2" />
                      <span className="text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-3">Barcode Required?</label>
                <div className="flex flex-wrap gap-4">
                  {['Yes', 'No', 'Maybe Later'].map(option => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="barcode" checked={formData.barcodeRequired === option}
                        onChange={() => handleInputChange('barcodeRequired', option)}
                        className="w-5 h-5 text-primary bg-gray-700 border-gray-600 focus:ring-primary focus:ring-2" />
                      <span className="text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-3">Lot / Batch Tracking?</label>
                <div className="flex gap-4">
                  {['Yes', 'No'].map(option => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="lotTracking" checked={formData.lotTracking === option}
                        onChange={() => handleInputChange('lotTracking', option)}
                        className="w-5 h-5 text-primary bg-gray-700 border-gray-600 focus:ring-primary focus:ring-2" />
                      <span className="text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {/* Sales & Dispatch */}
            <div className="border-l-4 border-primary pl-6 space-y-6">
              <h3 className="text-xl font-bold text-primary font-Bai_Jamjuree">Sales & Dispatch Module</h3>
              <div>
                <label className="block text-sm font-medium text-white mb-3">Order Tracking?</label>
                <div className="flex gap-4">
                  {['Yes', 'No'].map(option => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="orderTracking" checked={formData.orderTracking === option}
                        onChange={() => handleInputChange('orderTracking', option)}
                        className="w-5 h-5 text-primary bg-gray-700 border-gray-600 focus:ring-primary focus:ring-2" />
                      <span className="text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-3">Delivery Schedule?</label>
                <div className="flex gap-4">
                  {['Yes', 'No'].map(option => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="deliverySchedule" checked={formData.deliverySchedule === option}
                        onChange={() => handleInputChange('deliverySchedule', option)}
                        className="w-5 h-5 text-primary bg-gray-700 border-gray-600 focus:ring-primary focus:ring-2" />
                      <span className="text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-3">Invoice Integration?</label>
                <div className="flex gap-4">
                  {['Yes', 'No'].map(option => (
                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="invoiceIntegration" checked={formData.invoiceIntegration === option}
                        onChange={() => handleInputChange('invoiceIntegration', option)}
                        className="w-5 h-5 text-primary bg-gray-700 border-gray-600 focus:ring-primary focus:ring-2" />
                      <span className="text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            {/* Reports */}
            <div className="border-l-4 border-primary pl-6">
              <h3 className="text-xl font-bold text-primary font-Bai_Jamjuree mb-4">Reports Required</h3>
              <div className="space-y-2">
                {[
                  { key: 'dailyReport', label: 'Daily Production Report' },
                  { key: 'shiftReport', label: 'Shift-wise Report' },
                  { key: 'machineEfficiency', label: 'Machine-wise Efficiency' },
                  { key: 'dashboard', label: 'Management Dashboard' }
                ].map(report => (
                  <label key={report.key} className="flex items-center space-x-3 cursor-pointer">
                    <input type="checkbox" checked={formData[report.key]}
                      onChange={(e) => handleInputChange(report.key, e.target.checked)}
                      className="w-5 h-5 text-primary bg-gray-700 border-gray-600 rounded focus:ring-primary focus:ring-2" />
                    <span className="text-white">{report.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Stage 4 */}
        {currentStage === 4 && (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold font-Bai_Jamjuree text-primary mb-2">Stage 4: Commercial & Customization</h2>
              <p className="text-gray-300 mb-4">Final details for accurate proposal and pricing</p>
              <BottomLine />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Number of Users *</label>
                <input type="number" value={formData.numberOfUsers} onChange={(e) => handleInputChange('numberOfUsers', e.target.value)}
                  className="input-style w-full" placeholder="e.g., 10" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Number of Plants *</label>
                <input type="number" value={formData.numberOfPlants} onChange={(e) => handleInputChange('numberOfPlants', e.target.value)}
                  className="input-style w-full" placeholder="e.g., 2" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-3">Deployment Preference *</label>
              <div className="space-y-2">
                {['Cloud-based', 'On-premise', 'Hybrid', 'Not Sure'].map(option => (
                  <label key={option} className="flex items-center space-x-3 cursor-pointer">
                    <input type="radio" name="deployment" checked={formData.deployment === option}
                      onChange={() => handleInputChange('deployment', option)}
                      className="w-5 h-5 text-primary bg-gray-700 border-gray-600 focus:ring-primary focus:ring-2" />
                    <span className="text-white">{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Custom Features Required</label>
              <textarea value={formData.customFeatures} onChange={(e) => handleInputChange('customFeatures', e.target.value)}
                className="input-style w-full" rows="4" placeholder="Describe any specific customizations or special requirements..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Expected Go-Live Timeline</label>
              <select value={formData.goLiveTimeline} onChange={(e) => handleInputChange('goLiveTimeline', e.target.value)} className="input-style w-full">
                <option value="">Select timeline</option>
                <option value="Immediate (Within 1 month)">Immediate (Within 1 month)</option>
                <option value="1-3 months">1-3 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="6+ months">6+ months</option>
                <option value="Just exploring">Just exploring</option>
              </select>
            </div>
            <div className="border-t border-primary/30 pt-6">
              <h3 className="text-xl font-bold text-primary font-Bai_Jamjuree mb-4">Lead Management</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Lead Status</label>
                  <select value={formData.leadStatus} onChange={(e) => handleInputChange('leadStatus', e.target.value)} className="input-style w-full">
                    <option value="New">New</option>
                    <option value="Demo Done">Demo Done</option>
                    <option value="Proposal Sent">Proposal Sent</option>
                    <option value="Negotiation">Negotiation</option>
                    <option value="Closed Won">Closed Won</option>
                    <option value="Closed Lost">Closed Lost</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Priority</label>
                  <select value={formData.priority} onChange={(e) => handleInputChange('priority', e.target.value)} className="input-style w-full">
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="bg-primary/20 border border-primary rounded-lg p-4 mb-6">
              <p className="text-primary text-sm">
                ✅ <strong>All stages completed!</strong> Click "Submit to Get Started" to send us your requirements.
              </p>
            </div>
            {submitStatus && (
              <div className={`border rounded-lg p-4 mb-6 ${
                submitStatus.type === 'success' ? 'bg-primary/20 border-primary' : 'bg-red-500/20 border-red-500'
              }`}>
                <p className={`${submitStatus.type === 'success' ? 'text-primary' : 'text-red-400'}`}>
                  {submitStatus.message}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="bg-[#464646]/50 backdrop-blur-md rounded-lg p-6 flex justify-between items-center border border-primary/20">
        <button onClick={prevStage} disabled={currentStage === 1}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-bold font-Bai_Jamjuree transition-all duration-300 ${
            currentStage === 1
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-gray-700 text-white hover:bg-gray-600'
          }`}>
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        <div className="flex space-x-3">
          {currentStage === 4 && (
            <>
              <button onClick={submitToGoogleSheets} disabled={isSubmitting || submitStatus?.type === 'success'}
                className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-bold font-Bai_Jamjuree transition-all duration-300 ${
                  isSubmitting || submitStatus?.type === 'success'
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-primary text-black hover:bg-primary/80 shadow-lg'
                }`}>
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </>
                ) : submitStatus?.type === 'success' ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Submitted!</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Submit to Get Started</span>
                  </>
                )}
              </button>
              <button onClick={exportAsText}
                className="flex items-center space-x-2 px-6 py-3 bg-primary text-black rounded-lg font-bold font-Bai_Jamjuree hover:bg-primary/80 transition-all duration-300">
                <Download className="w-5 h-5" />
                <span>Download Copy</span>
              </button>
            </>
          )}
        </div>

        <button onClick={nextStage} disabled={currentStage === 4}
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-bold font-Bai_Jamjuree transition-all duration-300 ${
            currentStage === 4
              ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
              : 'bg-primary text-black hover:bg-primary/80'
          }`}>
          <span>Next</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Info Box */}
      <div className="bg-primary/10 border border-primary/30 rounded-lg p-6 mt-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-primary mb-2 font-Bai_Jamjuree">💡 Pro Tip</h3>
        <p className="text-gray-300 text-sm">
          Send this to your prospects: "To understand your manufacturing process properly and suggest the right ERP configuration, 
          we request you to share some basic details. This helps us avoid unnecessary features and give you an accurate solution and pricing."
        </p>
      </div>
    </section>
  );
}