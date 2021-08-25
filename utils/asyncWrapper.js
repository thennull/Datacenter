exports.asyncHandler = function (func) {
  return function (root, args, context, info) {
    return Promise.resolve(func(root, args, context, info)).catch(function (
      error
    ) {
      console.error(error); // Error treatment must be implemented .... system crashing otherwise
      process.exit(1);
    });
  };
};
