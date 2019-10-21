@include('media::admin.image_picker.single', [
    'title' => trans('product::products.form.base_file'),
    'inputName' => 'files[base_file]',
    'file' => $product->baseFile,
    'product' => $product
])
